/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
import { FlattenedNodesObserver } from "@polymer/polymer/lib/utils/flattened-nodes-observer.js";
import { HAXWiring } from "@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";
import { SchemaBehaviors } from "@lrnwebcomponents/schema-behaviors/schema-behaviors.js";
import "@lrnwebcomponents/simple-modal/simple-modal.js";
/**
`lrn-vocab`
Vocabulary term with visual treatment and semantic meaning.

* @demo demo/index.html
*/
class LrnVocab extends SchemaBehaviors(PolymerElement) {
  constructor() {
    super();
    import("@polymer/paper-button/paper-button.js");
  }
  static get template() {
    return html`
      <style>
        :host {
          display: inline-flex;
          --lrn-vocab-border: 1px dashed #ccc;
        }
        paper-button {
          text-transform: none;
          padding: 0;
          margin: 0;
          position: relative;
          top: 0px;
          border-radius: 0;
          border-bottom: var(--lrn-vocab-border);
          background: #f5f5f5;
          @apply --lrn-vocab-button;
        }
        paper-button:hover {
          background: #bbdefb;
          border-bottom: 1px dashed #2196f3;
          @apply --lrn-vocab-button-hover;
        }
      </style>
      <paper-button id="button" noink on-click="openDialog"
        >[[term]]</paper-button
      >
    `;
  }

  static get tag() {
    return "lrn-vocab";
  }
  static get properties() {
    let props = {
      /**
       * Term to highlight / display
       */
      term: {
        type: String,
        reflectToAttribute: true
      }
    };
    if (super.properties) {
      props = Object.assign(props, super.properties);
    }
    return props;
  }
  /**
   * Request the singleton dialog open
   */
  openDialog(e) {
    let children = FlattenedNodesObserver.getFlattenedNodes(this).filter(
      n => n.nodeType === Node.ELEMENT_NODE
    );
    let c = document.createElement("div");
    for (var child in children) {
      c.appendChild(children[child].cloneNode(true));
    }
    const evt = new CustomEvent("simple-modal-show", {
      bubbles: true,
      cancelable: true,
      detail: {
        title: this.term,
        elements: {
          content: c
        },
        invokedBy: this.shadowRoot.querySelector("#button")
      }
    });
    window.dispatchEvent(evt);
  }
  /**
   * Attached life cycle
   */
  connectedCallback() {
    super.connectedCallback();
    afterNextRender(this, function() {
      window.SimpleModal.requestAvailability();
      this.HAXWiring = new HAXWiring();
      this.HAXWiring.setup(LrnVocab.haxProperties, LrnVocab.tag, this);
    });
  }
  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: false,
      gizmo: {
        title: "Vocab",
        description: "Vocabulary term",
        icon: "image:details",
        color: "red",
        groups: ["Vocab"],
        handles: [
          {
            type: "inline",
            text: "term"
          }
        ],
        meta: {
          author: "LRNWebComponents"
        }
      },
      settings: {
        quick: [
          {
            property: "term",
            title: "Term",
            description: "The word or words to make clickable for more detail.",
            inputMethod: "textfield",
            icon: "editor:title",
            required: true
          }
        ],
        configure: [
          {
            property: "term",
            title: "Term",
            description: "The word or words to make clickable for more detail.",
            inputMethod: "textfield",
            icon: "editor:title",
            required: true
          },
          {
            slot: "",
            title: "Contents",
            description: "Contents to display in the pop up.",
            inputMethod: "code-editor",
            required: true
          }
        ],
        advanced: []
      }
    };
  }
}
window.customElements.define(LrnVocab.tag, LrnVocab);
export { LrnVocab };
