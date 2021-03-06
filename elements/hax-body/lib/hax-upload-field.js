import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@lrnwebcomponents/simple-colors/simple-colors.js";
import "@lrnwebcomponents/simple-picker/simple-picker.js";
import "./hax-shared-styles.js";

class HaxUploadField extends PolymerElement {
  constructor() {
    super();
    import("@polymer/paper-input/paper-input.js");
    import("@polymer/paper-icon-button/paper-icon-button.js");
    import("@vaadin/vaadin-upload/vaadin-upload.js");
  }
  static get template() {
    return html`
      <style include="simple-colors-shared-styles hax-shared-styles">
        :host {
          display: block;
          visibility: visible;
          transition: 0.3s all ease;
          box-sizing: border-box;
          pointer-events: all;
          overflow: visible;
          --simple-camera-snap-width: 300px;
          --simple-camera-snap-height: calc(300px * 9 / 16);
          --simple-camera-snap-color: var(--eco-json-form-color, #222);
          --simple-camera-snap-background: var(--eco-json-form-bg, white);
          --simple-camera-snap-border-radius: 2px;
          --lumo-font-family: var(
            --eco-json-form-font-family,
            var(--paper-font-caption_-_font-family, unset)
          );
          --lumo-base-color: var(
            --eco-json-form-bg,
            var(--primary-background-color, #fff)
          );
          --lumo-primary-contrast-color: var(
            --eco-json-form-bg,
            var(--primary-background-color, #fff)
          );
          --lumo-primary-color: var(
            --eco-json-form-active-color,
            var(--primary-color, #000)
          );
          --lumo-primary-text-color: var(
            --eco-json-form-color,
            var(--primary-text-color, #222)
          );
          --lumo-body-text-color: var(
            --eco-json-form-color,
            var(--primary-text-color, #222)
          );
          --lumo-header-text-color: var(
            --eco-json-form-color,
            var(--primary-text-color, #222)
          );
          --lumo-secondary-text-color: var(
            --eco-json-form-faded-color,
            var(--secondary-text-color, #888)
          );
          --lumo-disabled-text-color: var(
            --eco-json-form-faded-color,
            var(--secondary-text-color, #888)
          );
          background-color: var(
            --eco-json-form-bg,
            var(--primary-background-color, #fff)
          );
          --simple-picker-float-label-active-color: var(
            --eco-json-form-active-color,
            var(--primary-color, #000)
          );
          --simple-picker-float-label-faded-color: var(
            --eco-json-form-faded-color,
            var(--secondary-text-color, #888)
          );
          --simple-picker-background-color: var(
            --eco-json-form-bg,
            var(--primary-background-color, #fff)
          );
          --simple-picker-border-color: transparent;
          --simple-picker-sample-focus: {
            transition: all 0.5s;
            border: none;
          }
        }
        :host #legend {
          transition: all 0.5s;
          color: var(
            --eco-json-form-faded-color,
            var(--secondary-text-color, #888)
          );
        }
        :host(:focus-within) #legend {
          color: var(--eco-json-form-active-color, var(--primary-color, #000));
        }
        :host #fieldset {
          border-radius: 2px;
          transition: all 0.5s;
          border: 1px solid
            var(--eco-json-form-faded-color, var(--secondary-text-color, #888));
        }
        :host #fieldset > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        :host #fieldset > div > *:not(#picker) {
          flex: 1 1 auto;
        }
        #picker {
          margin-bottom: 0;
          margin-right: 5px;
        }
        vaadin-upload {
          padding: 0;
          margin: 0;
        }
        simple-camera-snap {
          position: relative;
          --simple-camera-snap-button-container: {
            position: absolute;
            bottom: 2px;
            z-index: 5;
          }
          --simple-camera-snap-button: {
            border-radius: 100%;
            opacity: 0.7;
          }
          @apply --hax-upload-camera;
        }
      </style>
      <fieldset id="fieldset">
        <legend id="legend" hidden$="[[!label]]">[[label]]</legend>
        <div>
          <simple-picker
            id="picker"
            aria-label="Source..."
            required
            value="{{option}}"
            options="[[options]]"
          >
          </simple-picker>
          <paper-input
            id="url"
            hidden$="[[_isHidden(option,'url')]]"
            value="{{value}}"
            label="URL"
            type="url"
            auto-validate=""
          ></paper-input>
          <vaadin-upload
            capture
            form-data-name="file-upload"
            hidden$="[[_isHidden(option,'fileupload')]]"
            id="fileupload"
          ></vaadin-upload>
          <div id="camerahole" hidden$="[[_isHidden(option,'selfie')]]"></div>
        </div>
      </fieldset>
    `;
  }
  static get properties() {
    return {
      label: {
        type: String,
        value: null
      },
      value: {
        type: String,
        notify: true
      },
      option: {
        type: String
      },
      options: {
        type: Array
      }
    };
  }
  _isHidden(option, ui) {
    return option !== ui;
  }
  /**
   * Respond to uploading a file
   */
  _fileAboutToUpload(e) {
    if (!this.__allowUpload) {
      // cancel the event so we can jump in
      e.preventDefault();
      e.stopPropagation();
      // look for a match as to what gizmo types it supports
      let values = {
        source: e.detail.file.name,
        type: e.detail.file.type
      };
      // we have no clue what this is.. let's try and guess..
      var type = window.HaxStore.guessGizmoType(values);
      // find targets that support this type
      let targets = window.HaxStore.getHaxAppStoreTargets(type);
      // make sure we have targets
      if (targets.length === 1) {
        this._haxAppPickerSelection({ detail: targets[0] });
      } else if (targets.length !== 0) {
        window.HaxStore.instance.haxAppPicker.presentOptions(
          targets,
          type,
          "Where would you like to upload this " + type + "?",
          "app"
        );
      } else {
        window.HaxStore.toast(
          "Sorry, you don't have a storage location that can handle " +
            type +
            " uploads!",
          5000
        );
      }
    } else {
      this.__allowUpload = false;
    }
  }
  /**
   * Respond to successful file upload, now inject url into url field and
   * do a gizmo guess from there!
   */
  _fileUploadResponse(e) {
    // convert response to object
    let response = JSON.parse(e.detail.xhr.response);
    // access the app that did the upload
    let map = this.__appUsed.connection.operations.add.resultMap;
    let data = {};
    let item = {};
    // look for the items element to draw our data from at its root
    if (
      typeof this._resolveObjectPath(map.item, response) !== typeof undefined
    ) {
      data = this._resolveObjectPath(map.item, response);
    }
    item.type = map.defaultGizmoType;
    // pull in prop matches
    for (var prop in map.gizmo) {
      item[prop] = this._resolveObjectPath(map.gizmo[prop], data);
    }
    // another sanity check, if we don't have a url but have a source bind that too
    if (
      typeof item.url === typeof undefined &&
      typeof item.source !== typeof undefined
    ) {
      item.url = item.source;
    }
    // gizmo type is also supported in the mapping element itself
    // Think an asset management backend as opposed to a specific
    // type of asset like video. If the item coming across can
    // effectively check what kind of gizmo is required for it
    // to work then we need to support that asset declaring the
    // gizmo type needed
    if (typeof map.gizmo.type !== typeof undefined) {
      item.type = this._resolveObjectPath(map.gizmo.type, data);
    }
    // set the value of the url which will update our URL and notify
    this.shadowRoot.querySelector("#url").value = item.url;
  }
  /**
   * Event for an app being selected from a picker
   * This happens when multiple upload targets support the given type
   */
  _haxAppPickerSelection(e) {
    // details for where to upload the file
    let connection = e.detail.connection;
    this.__appUsed = e.detail;
    this.shadowRoot.querySelector("#fileupload").method =
      connection.operations.add.method;
    let requestEndPoint = connection.protocol + "://" + connection.url;
    // ensure we build a url correctly
    if (requestEndPoint.substr(requestEndPoint.length - 1) != "/") {
      requestEndPoint += "/";
    }
    // support local end point modification
    if (typeof connection.operations.add.endPoint !== typeof undefined) {
      requestEndPoint += connection.operations.add.endPoint;
    }
    // implementation specific tweaks to talk to things like HAXcms and other CMSs
    // that have per load token based authentication
    if (
      window.HaxStore.instance.connectionRewrites.appendUploadEndPoint != null
    ) {
      requestEndPoint +=
        "?" + window.HaxStore.instance.connectionRewrites.appendUploadEndPoint;
    }
    if (window.HaxStore.instance.connectionRewrites.appendJwt != null) {
      requestEndPoint +=
        "&" +
        window.HaxStore.instance.connectionRewrites.appendJwt +
        "=" +
        localStorage.getItem(
          window.HaxStore.instance.connectionRewrites.appendJwt
        );
    }
    this.shadowRoot.querySelector("#fileupload").headers = connection.headers;
    this.shadowRoot.querySelector("#fileupload").target = requestEndPoint;
    // invoke file uploading...
    this.__allowUpload = true;
    this.shadowRoot.querySelector("#fileupload").uploadFiles();
  }
  connectedCallback() {
    super.connectedCallback();
    // hide the button if this environment can't support it anyway
    if (!navigator.mediaDevices) {
      this.options = [
        [
          {
            alt: "URL",
            icon: "icons:link",
            value: "url"
          }
        ],
        [
          {
            alt: "Upload",
            icon: "icons:file-upload",
            value: "fileupload"
          }
        ]
      ];
      this.shadowRoot.querySelector("#camerahole").style.display = "none";
    } else {
      this.options = [
        [
          {
            alt: "URL",
            icon: "icons:link",
            value: "url"
          }
        ],
        [
          {
            alt: "Upload",
            icon: "icons:file-upload",
            value: "fileupload"
          }
        ],
        [
          {
            alt: "Camera",
            icon: "image:photo-camera",
            value: "selfie"
          }
        ]
      ];
    }
    this.option = "fileupload";
    this.shadowRoot
      .querySelector("#fileupload")
      .addEventListener("upload-before", this._fileAboutToUpload.bind(this));
    this.shadowRoot
      .querySelector("#fileupload")
      .addEventListener("upload-response", this._fileUploadResponse.bind(this));
    this.shadowRoot.querySelector("#picker").addEventListener("change", e => {
      if (e && e.detail && e.detail.value === "selfie") this._takeSelfie(e);
    });
    this.shadowRoot
      .querySelector("#camerahole")
      .addEventListener(
        "simple-camera-snap-image",
        this.__newPhotoShowedUp.bind(this)
      );
    document.body.addEventListener(
      "hax-app-picker-selection",
      this._haxAppPickerSelection.bind(this)
    );
  }
  /**
   * life cycle, ensure body isnt listened to anymore here
   */
  disconnectedCallback() {
    document.body.removeEventListener(
      "hax-app-picker-selection",
      this._haxAppPickerSelection.bind(this)
    );
    super.disconnectedCallback();
  }
  /**
   * We got a new photo
   */
  __newPhotoShowedUp(e) {
    let file = new File([e.detail.raw], "headshot" + e.timeStamp + ".jpg");
    this.shadowRoot.querySelector("#fileupload")._addFile(file);
  }
  /**
   * Invoke the camera to set itself up
   */
  _takeSelfie(e) {
    if (!this.camera) {
      import("@lrnwebcomponents/simple-login/lib/simple-camera-snap.js");
      this.camera = document.createElement("simple-camera-snap");
      this.camera.autoplay = true;
      this.shadowRoot.querySelector("#camerahole").appendChild(this.camera);
    }
  }
  /**
   * Helper to take a multi-dimensional object and convert
   * it's reference into the real value. This allows for variable input defined
   * in a string to actually hit the deeper part of an object structure.
   */
  _resolveObjectPath(path, obj) {
    return path.split(".").reduce(function(prev, curr) {
      return prev ? prev[curr] : null;
    }, obj || self);
  }
}

window.customElements.define("hax-upload-field", HaxUploadField);
export { HaxUploadField };
