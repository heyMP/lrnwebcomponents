/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { FlattenedNodesObserver } from "@polymer/polymer/lib/utils/flattened-nodes-observer.js";
import { dom } from "@polymer/polymer/lib/legacy/polymer.dom.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
import { SchemaBehaviors } from "@lrnwebcomponents/schema-behaviors/schema-behaviors.js";
/**
 * `code-editor`
 * `Wrapper on top of a code editor`
 *
 * @demo demo/index.html
 * @microcopy - the mental model for this element
 * - monaco is the VS code editor
 */
class CodeEditor extends SchemaBehaviors(PolymerElement) {
  constructor() {
    super();
    this.__libPath =
      decodeURIComponent(import.meta.url) + "/../../../monaco-editor/min/vs";
    import("@lrnwebcomponents/code-editor/lib/monaco-element/monaco-element.js");
    import("@lrnwebcomponents/code-editor/lib/code-pen-button.js");
    this.addEventListener("monaco-element-ready", this.editorReady.bind(this));
  }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 16px;
        }
        .code-pen-container {
          width: 100%;
          display: flex;
          background-color: var(--code-pen-button-color, #222222);
          color: white;
          height: 40px;
          justify-content: flex-end;
          align-items: center;
        }
        .code-pen-container span {
          display: inline-flex;
          line-height: 16px;
          font-size: 16px;
          padding: 12px;
        }
        [hidden] {
          display: none !important;
        }
        code-pen-button {
          float: right;
          height: 40px;
        }
        h3 {
          color: var(--code-pen-title-color, #222222);
        }
        #codeeditor {
          height: 100%;
          display: flex;
        }
      </style>
      <h3 hidden$="[[!title]]">[[title]]</h3>
      <monaco-element
        id="codeeditor"
        lib-path="[[__libPath]]"
        language="[[language]]"
        theme="[[theme]]"
        on-value-changed="_editorDataChanged"
        font-size$="[[fontSize]]"
        read-only$="[[readOnly]]"
      >
      </monaco-element>
      <div class="code-pen-container" hidden$="[[!showCodePen]]">
        <span>Check it out on code pen: </span
        ><code-pen-button data="[[codePenData]]"></code-pen-button>
      </div>
    `;
  }

  static get tag() {
    return "code-editor";
  }

  static get properties() {
    let props = {
      /**
       * Title
       */
      title: {
        type: String
      },
      /**
       * Show codePen button to fork it to there to run
       */
      showCodePen: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Readonly setting for the editor
       */
      readOnly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Code pen data, computed based on the HTML editor
       */
      codePenData: {
        type: Object,
        computed: "_computeCodePenData(title, value)"
      },
      /**
       * contents of the editor
       */
      editorValue: {
        type: String,
        observer: "_editorValueChanged"
      },
      /**
       * value of the editor after the fact
       */
      value: {
        type: String,
        notify: true
      },
      /**
       * Theme for the Ace editor.
       */
      theme: {
        type: String,
        value: "vs-dark"
      },
      /**
       * Mode / language for editor
       */
      mode: {
        type: String,
        observer: "_modeChanged"
      },
      /**
       * Language to present color coding for
       */
      language: {
        type: String,
        value: "javascript"
      },
      /**
       * font size for the editor
       */
      fontSize: {
        type: Number,
        value: 16
      }
    };
    if (super.properties) {
      props = Object.assign(props, super.properties);
    }
    return props;
  }

  /**
   * Update the post data whenever the editor has been updated
   */
  _computeCodePenData(title, editorValue) {
    return {
      title: title,
      html: editorValue
    };
  }
  /**
   * LEGACY: pass down mode to language if that api is used
   */
  _modeChanged(newValue) {
    this.language = this.mode;
  }

  /**
   * Notice code editor changes and reflect them into this element
   */
  _editorDataChanged(e) {
    // value coming up off of thiss
    this.value = e.detail;
  }

  /**
   * Calculate what's in slot currently and then inject it into the editor.
   */
  updateEditorValue(node) {
    if (node) {
      var content = "";
      var children = node;
      if (node.tagName !== "TEMPLATE") {
        console.warn(
          "code-editor works best with a template tag provided in light dom"
        );
        children = dom(this).getEffectiveChildNodes();
        if (children.length > 0) {
          // loop through everything found in the slotted area and put it back in
          for (var j = 0, len2 = children.length; j < len2; j++) {
            if (typeof children[j].tagName !== typeof undefined) {
              content += children[j].outerHTML;
            } else {
              content += children[j].textContent;
            }
          }
        }
      } else {
        content = children.innerHTML;
      }
      if (content) {
        this.shadowRoot.querySelector("#codeeditor").value = content.trim();
      }
    }
  }
  _editorValueChanged(newValue) {
    if (newValue) {
      this.shadowRoot.querySelector("#codeeditor").value = newValue;
    }
  }
  /**
   * Ensure fields don't pass through to HAX if in that context
   */
  preProcessHaxNodeToContent(clone) {
    clone.editorValue = null;
    clone.codePenData = null;
    clone.value = null;
    clone.removeAttribute("value");
    clone.removeAttribute("code-pen-data");
    return clone;
  }
  /**
   * attached life cycle
   */
  connectedCallback() {
    super.connectedCallback();
    afterNextRender(this, function() {
      // mutation observer that ensures state of hax applied correctly
      this._observer = new FlattenedNodesObserver(this, info => {
        // if we've got new nodes, we have to react to that
        if (info.addedNodes.length > 0) {
          info.addedNodes.map(node => {
            if (node.tagName) {
              this.updateEditorValue(node);
            }
          });
        }
        // if we dropped nodes via the UI (delete event basically)
        if (info.removedNodes.length > 0) {
          // handle removing items... not sure we need to do anything here
          info.removedNodes.map(node => {
            if (node.tagName) {
              this.updateEditorValue(node);
            }
          });
        }
      });
    });
  }
  disconnectedCallback() {
    this.removeEventListener(
      "monaco-element-ready",
      this.editorReady.bind(this)
    );
    super.disconnectedCallback();
  }
  editorReady(e) {
    if (this.editorValue) {
      this.shadowRoot.querySelector("#codeeditor").value = this.editorValue;
    }
  }
}
window.customElements.define(CodeEditor.tag, CodeEditor);
export { CodeEditor };
