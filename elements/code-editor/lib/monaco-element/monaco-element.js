import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
/**
 * `monaco-element`
 * Webcomponent wrapper for the monaco editor.
 *
 * Sets value, language and theme.
 * Offers a value-changed event.
 *
 * Partly influenced by https://github.com/PolymerVis/monaco-editor
 *
 * @customElement
 * @polymer
 *
 * @author Lars Gröber <larsgroeber7@gmail.com>
 */
class MonacoElement extends PolymerElement {
  constructor() {
    super();
    this.iframe = null;
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        iframe {
          border: none;
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
        }
      </style>
      <iframe id="iframe" frameborder="0"></iframe>
    `;
  }

  static get properties() {
    return {
      value: {
        type: String,
        value: "",
        observer: "monacoValueChanged"
      },
      fontSize: {
        type: Number,
        value: 16
      },
      readOnly: {
        type: Boolean,
        value: false
      },
      /**
       * THIS MAKES MULTIPLES EDITORS WORK BECAUSE OF EVENTS
       * DO NOT MESS WITH THIS AND IT HAS TO BE SET
       */
      uniqueKey: {
        type: String
      },
      eventTypes: {
        type: Object,
        value: {
          ready: "ready",
          focus: "focus",
          blur: "blur",
          valueChanged: "valueChanged",
          languageChanged: "languageChanged",
          themeChanged: "themeChanged"
        }
      },
      language: {
        type: String,
        value: "javascript",
        observer: "monacoLanguageChanged"
      },
      theme: {
        type: String,
        value: "vs-dark",
        observer: "monacoThemeChanged"
      },
      libPath: {
        type: String,
        value: "node_modules/monaco-editor/min/vs"
      },
      editorReference: {
        type: String,
        reflectToAttribute: true,
        computed: "generateUUID()"
      },
      /**
       * automatically set focus on the iframe
       */
      autofocus: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * hide line numbers
       */
      hideLineNumbers: {
        type: Boolean,
        value: false
      }
    };
  }
  /**
   * Generate a UUID
   */
  generateUUID() {
    return "ss-s-s-s-sss".replace(/s/g, this._uuidPart);
  }
  _uuidPart() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  get document() {
    if (this.iframe.contentWindow) {
      return this.iframe.contentWindow.document;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("message", message => {
      this.handleMessage(message);
    });
    setTimeout(() => {
      if (!this.__init) {
        this.initIFrame();
      }
    }, 500);
  }

  disconnectedCallback() {
    window.removeEventListener("message", message => {
      this.handleMessage(message);
    });
    this.__init = false;
    super.disconnectedCallback();
  }

  initIFrame() {
    this.iframe = this.shadowRoot.querySelector("#iframe");
    if (this.document && !this.__init) {
      this.__init = true;
      const div = document.createElement("div");
      div.id = "container";
      this.document.body.appendChild(div);
      var iframeScript = `
  var eventTypes = {
    ready: 'ready',
    focus: 'focus',
    blur: "blur",
    valueChanged: 'valueChanged',
    languageChanged: 'languageChanged',
    themeChanged: 'themeChanged',
  };

  class MonacoEditor {
    constructor(editorReference) {
      this._editorReference_ = editorReference;
      this.language = 'javascript';
      this.value = '';
      this.editor = null;
      this.setupEventListener('message', this.handleMessage.bind(this));
      this.setupEditor();
    }

    setupEditor() {
      require.config({ paths: { vs: '${this.libPath}' } });
      require(['vs/editor/editor.main'], () => {
        this.editor = monaco.editor.create(document.getElementById('container'), {
          value: this.value,
          language: '${this.language}',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          lineNumbers: '${!this.hideLineNumbers}',
          fontSize: ${this.fontSize},
          readOnly: ${this.readOnly},
          minimap: {
            enabled: true
          },
          autoIndent: true,
        });
        const model = this.editor.getModel();
        model.onDidChangeContent(() => {
          const value = model.getValue();
          this.onValueChanged(value);
        });

        this.ready();
        if(${this.autofocus}) this.editor.focus();
        this.editor.onDidFocusEditorText(e=>{
          this.postMessage(eventTypes.focus, null);
        });
        this.editor.onDidBlurEditorText(e=>{
          this.postMessage(eventTypes.blur, null);
        });
      });
    }

    ready() {
      setTimeout(() => {
        this.postMessage(eventTypes.ready, null);
        this.setupEventListener(
          eventTypes.valueChanged,
          this.onValueChanged.bind(this)
        );
      }, 100);
    }

    _handleMessage(data) {
      switch (data.event) {
        case eventTypes.valueChanged:
          this.onInputValueChanged(data.payload);
          break;
        case eventTypes.languageChanged:
          this.onLanguageChanged(data.payload);
          break;
        case eventTypes.themeChanged:
          this.onThemeChanged(data.payload);
          break;
        default:
          break;
      }
    }

    handleMessage(message) {
      try {
        const data = JSON.parse(message.data);
        this._handleMessage(data);
      } catch (error) {
        console.warn(error);
        return;
      }
    }

    postMessage(event, payload) {
      var msg = {
        event: event,
        payload: payload,
        editorReference: this._editorReference_
      }
      window.parent.postMessage(msg, window.parent.location.href);
    }

    setupEventListener(type, callback) {
      window.addEventListener(type, data => {
        callback(data);
      });
    }

    onInputValueChanged(newValue) {
      if (newValue !== this.value) {
        this.value = newValue;
        this.editor.getModel().setValue(newValue);
        this.postMessage(eventTypes.valueChanged, newValue);
      }
    } 

    onValueChanged(newValue) {
      if (newValue !== this.value) {
        this.value = newValue;
        this.postMessage(eventTypes.valueChanged, newValue);
      }
    }

    onLanguageChanged(newLang) {
      monaco.editor.setModelLanguage(this.editor.getModel(), newLang);
    }

    onThemeChanged(newValue) {
      monaco.editor.setTheme(newValue);
    }
  }

  new MonacoEditor("${this.editorReference}");`;
      this.insertScriptElement({
        src: `${this.libPath}/loader.js`,
        onload: () => {
          this.insertScriptElement({ text: iframeScript });
          this.insertStyle();
        }
      });
    }
    if (this.autofocus) this.iframe.focus();
  }

  handleMessage(message) {
    try {
      let data = message.data;
      if (typeof message.data === "string") {
        data = JSON.parse(message.data);
      }
      this._handleMessage(data);
    } catch (error) {
      console.warn("[monaco-element] Error while parsing message:", error);
      return;
    }
  }

  _handleMessage(data) {
    // bail if we don't have a valid editor reference
    if (data.editorReference !== this.editorReference) return;

    if (data.event === this.eventTypes.valueChanged) {
      const evt = new CustomEvent("value-changed", {
        bubbles: true,
        cancelable: true,
        detail: data.payload
      });
      this.dispatchEvent(evt);
    } else if (data.event === this.eventTypes.ready) {
      this.onIFrameReady();
    } else if (data.event === this.eventTypes.focus) {
      this.onIFrameFocus();
    } else if (data.event === this.eventTypes.blur) {
      this.onIFrameBlur();
    }
  }
  onIFrameFocus() {
    this.dispatchEvent(
      new CustomEvent("code-editor-focus", {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: true
      })
    );
  }
  onIFrameBlur() {
    this.dispatchEvent(
      new CustomEvent("code-editor-blur", {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: true
      })
    );
  }

  onIFrameReady() {
    this.monacoValueChanged(this.value);
    this.monacoLanguageChanged(this.language);
    this.monacoThemeChanged(this.theme);
    // fire when we're ready
    setTimeout(() => {
      this.dispatchEvent(
        new CustomEvent("monaco-element-ready", {
          bubbles: true,
          composed: true,
          cancelable: true,
          detail: true
        })
      );
    }, 100);
  }

  monacoValueChanged(value) {
    this.postMessage(this.eventTypes.valueChanged, value);
  }

  monacoLanguageChanged(value) {
    this.postMessage(this.eventTypes.languageChanged, value);
  }

  monacoThemeChanged(value) {
    this.postMessage(this.eventTypes.themeChanged, value);
  }

  postMessage(event, payload) {
    if (!this.iframe) {
      return;
    }
    if (this.iframe.contentWindow != null) {
      this.iframe.contentWindow.postMessage(
        JSON.stringify({ event, payload }),
        window.location.href
      );
    }
  }

  insertScriptElement({ src, text, onload }) {
    var ele = this.document.createElement("script");
    if (src) ele.src = src;
    if (text) ele.text = text;
    if (onload) ele.onload = onload;
    this.document.head.appendChild(ele);
  }

  insertStyle() {
    var css = `
    body {
      height: 100vh;
      overflow: hidden;
      margin: 0;
    }    
    #container {
      width: 100%;
      height: 100%;
    }
    .debug-red {
      background : red;
    }
    .debug-green {
      background : green;
    }
    html,body {
      margin : 0px;
    }`;
    const head = this.document.head;
    const style = this.document.createElement("style");
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(this.document.createTextNode(css));
    }
    head.appendChild(style);
  }
}

window.customElements.define("monaco-element", MonacoElement);
export { MonacoElement };
window.MonacoData = window.MonacoData || {};
