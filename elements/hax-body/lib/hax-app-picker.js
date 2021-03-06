import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
import { dom } from "@polymer/polymer/lib/legacy/polymer.dom.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import "./hax-shared-styles.js";
/**
 `hax-app-picker`
 A picker for selecting an item from a list of apps / hax gizmos which require
 a decision to be made. This is used when multiple things match either on upload
 in the add operation of the app or in the gizmo selection to render through,
 such as having multiple ways of presenting an image.

* @demo demo/index.html

@microcopy - the mental model for this element
 - data - this is the app data model for an element which expresses itself to hax
*/
class HaxAppPicker extends PolymerElement {
  constructor() {
    super();
    import("@polymer/paper-button/paper-button.js");
    import("@lrnwebcomponents/hax-body/lib/hax-app-picker-item.js");
    import("@polymer/iron-icon/iron-icon.js");
    import("@polymer/iron-icons/iron-icons.js");
    import("@polymer/paper-dialog/paper-dialog.js");
    import("@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
  }
  static get template() {
    return html`
      <style include="hax-shared-styles">
        :host {
          display: block;
        }
        iron-icon:not(:defined),
        paper-button:not(:defined),
        paper-dialog:not(:defined) {
          display: none;
        }
        hax-app-picker-item {
          -webkit-transition: 0.3s all linear;
          transition: 0.3s all linear;
          display: inline-flex;
        }
        #closedialog {
          float: right;
          top: 15px;
          right: 0;
          position: absolute;
          padding: 8px;
          margin: 0;
          color: var(--hax-color-text);
          background-color: transparent;
          width: 40px;
          height: 40px;
          min-width: unset;
        }
        #ironlist {
          width: 100%;
          min-height: 400px;
          padding-bottom: 50px;
        }
        .repeat-item {
          display: inline-flex;
        }
        #dialog {
          min-width: 400px;
          min-height: 400px;
          max-height: 60vh;
          max-width: 50vw;
          overflow: hidden;
          border-radius: 16px;
          z-index: 1000000;
          border: 2px solid var(--hax-color-border-outline);
          @apply --hax-app-picker-dialog;
          background-color: #ffffff;
        }
        #buttonlist {
          display: block;
          text-align: left;
          margin: 0px;
          overflow-x: hidden;
          overflow-y: auto;
          min-height: 400px;
        }
        #title,
        .element-button > div {
          color: var(--hax-color-text);
        }
        #title {
          padding: 16px;
          border-bottom: 2px solid var(--hax-color-border-outline);
          margin: 0;
          width: calc(100% - 32px);
          background-color: var(--hax-color-menu-heading-bg);
          color: var(--hax-color-text);
          @apply --paper-font-title;
          @apply --hax-app-picker-dialog-title;
        }
        .scroll-wrap {
          margin-bottom: 64px;
          min-height: 200px;
        }
        .element-button {
          display: inline-block;
          width: 70px;
          margin: 8px 4px;
          text-align: center;
        }
      </style>
      <paper-dialog id="dialog">
        <h3 id="title">[[title]]</h3>
        <paper-dialog-scrollable id="buttonlist">
          <div class="scroll-wrap">
            <template
              is="dom-repeat"
              id="ironlist"
              items="[[selectionList]]"
              as="element"
            >
              <div class="repeat-item">
                <hax-app-picker-item
                  id$="picker-item-[[index]]"
                  class="element-button"
                  on-click="_selected"
                  data-selected\$="[[index]]"
                  label="[[element.title]]"
                  icon="[[element.icon]]"
                  color="[[element.color]]"
                ></hax-app-picker-item>
              </div>
            </template>
          </div>
        </paper-dialog-scrollable>
        <paper-button id="closedialog" on-click="close">
          <iron-icon icon="icons:cancel" title="Close dialog"></iron-icon>
        </paper-button>
      </paper-dialog>
    `;
  }
  static get tag() {
    return "hax-app-picker";
  }

  static get properties() {
    return {
      /**
       * raw element set
       */
      _elements: {
        type: Array,
        value: []
      },
      /**
       * Refactored list for selection purposes
       */
      selectionList: {
        type: Array,
        value: []
      },
      /**
       * Title for the dialog
       */
      title: {
        type: String,
        value: "Pick an options"
      },
      /**
       * Allow multiple uses
       */
      pickerType: {
        type: String,
        value: "gizmo"
      },
      /**
       * Opened status to bind to the dialog box being open
       */
      opened: {
        type: Boolean,
        value: false,
        observer: "_openedChanged"
      }
    };
  }
  /**
   * Attached life cycle
   */
  ready() {
    super.ready();
    this.dispatchEvent(
      new CustomEvent("hax-register-app-picker", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: this
      })
    );
    afterNextRender(this, function() {
      this.addEventListener("iron-overlay-canceled", this.close.bind(this));
      this.addEventListener("iron-overlay-closed", this.close.bind(this));
    });
  }

  /**
   * Close the picker and ensure body locking is off.
   */
  close() {
    this.opened = false;
  }

  /**
   * Open status changed
   */
  _openedChanged(newValue, oldValue) {
    if (newValue) {
      this.shadowRoot.querySelector("#dialog").open();
      // lock the background
      document.body.style.overflow = "hidden";
    } else {
      if (this.shadowRoot.querySelector("#dialog").close) {
        this.shadowRoot.querySelector("#dialog").close();
      }
      document.body.style.overflow = null;
    }
  }

  /**
   * Present options to the user with a modal and selection method that
   * shifts itself to be above everything (stack order)
   * @param  [array] elements  a list of elements for presenting to the user
   * to select between.
   */
  presentOptions(
    elements,
    type = "element",
    title = "Select an option",
    pickerType = "gizmo"
  ) {
    // wipe existing
    this.title = title;
    this.pickerType = pickerType;
    var tmp = [];
    switch (pickerType) {
      // hax gizmo selector
      case "gizmo":
        for (var i in elements) {
          elements[i].__type = type;
          tmp[i] = {
            icon: elements[i].gizmo.icon,
            title: elements[i].gizmo.title,
            color: elements[i].gizmo.color
          };
        }
        break;
      // app selector
      case "app":
        for (var i in elements) {
          tmp[i] = {
            icon: elements[i].details.icon,
            title: elements[i].details.title,
            color: elements[i].details.color
          };
        }
        break;
      // we don't know what to do with this
      default:
        tmp = elements;
        break;
    }
    this._elements = elements;
    this.set("selectionList", []);
    this.set("selectionList", tmp);
    this.opened = true;
    // try to focus on option 0
    setTimeout(() => {
      this.shadowRoot.querySelector("#picker-item-0").focus();
    }, 100);
  }
  /**
   * Handle the user selecting an app.
   */
  _selected(e) {
    var normalizedEvent = dom(e);
    let key = normalizedEvent.localTarget.getAttribute("data-selected");
    e.preventDefault();
    e.stopPropagation();
    if (typeof this._elements[key] !== typeof undefined) {
      // haxElement is a unique case
      if (this.pickerType == "gizmo") {
        window.HaxStore.write("activeHaxElement", this._elements[key], this);
        if (this._elements[key].__type === "__convert") {
          window.HaxStore.instance.haxManager.editExistingNode = true;
        }
        // ensure this is open even though it should be
        window.HaxStore.instance.haxManager.selectStep("configure");
        window.HaxStore.instance.haxManager.open();
      } else if (this.pickerType == "delete") {
        if (this._elements[key]["title"] === "Yes") {
          if (
            window.HaxStore.instance.activeHaxBody.activeNode !==
            window.HaxStore.instance.activeHaxBody.activeContainerNode
          ) {
            window.HaxStore.instance.activeHaxBody.haxDeleteNode(
              window.HaxStore.instance.activeHaxBody.activeNode,
              window.HaxStore.instance.activeHaxBody.activeContainerNode
            );
          } else {
            window.HaxStore.instance.activeHaxBody.haxDeleteNode(
              window.HaxStore.instance.activeHaxBody.activeNode
            );
          }
          window.HaxStore.toast("Element deleted", 2000);
        }
      } else {
        // bubble this up
        this.dispatchEvent(
          new CustomEvent("hax-app-picker-selection", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: this._elements[key]
          })
        );
      }
    }
    this.opened = false;
  }
}
window.customElements.define(HaxAppPicker.tag, HaxAppPicker);
export { HaxAppPicker };
