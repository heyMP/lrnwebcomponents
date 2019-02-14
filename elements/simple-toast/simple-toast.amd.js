define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/paper-toast/paper-toast.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/polymer/lib/utils/async.js"],function(_exports,_polymerElement,_paperToast,_paperButton,_polymerDom,async){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimpleToast=void 0;async=babelHelpers.interopRequireWildcard(async);function _templateObject_4a7f6c902fe211e9b3dc597c4e6cf99a(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<paper-toast id=\"toast\" text=\"[[text]]\" duration$=\"[[duration]]\" opened=\"{{opened}}\" class$=\"[[classStyle]]\">\n  <slot></slot>\n  <paper-button hidden$=\"[[!closeButton]]\" on-tap=\"hide\">[[closeText]]</paper-button>\n</paper-toast>"]);_templateObject_4a7f6c902fe211e9b3dc597c4e6cf99a=function _templateObject_4a7f6c902fe211e9b3dc597c4e6cf99a(){return data};return data}window.SimpleToast=window.SimpleToast||{};window.SimpleToast.requestAvailability=function(){if(!window.SimpleToast.instance){window.SimpleToast.instance=document.createElement("simple-toast");document.body.appendChild(window.SimpleToast.instance)}return window.SimpleToast.instance};var SimpleToast=function(_PolymerElement){babelHelpers.inherits(SimpleToast,_PolymerElement);function SimpleToast(){babelHelpers.classCallCheck(this,SimpleToast);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SimpleToast).apply(this,arguments))}babelHelpers.createClass(SimpleToast,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SimpleToast.prototype),"connectedCallback",this).call(this);window.addEventListener("simple-toast-hide",this.hideSimpleToast.bind(this));window.addEventListener("simple-toast-show",this.showSimpleToast.bind(this))}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SimpleToast.prototype),"connectedCallback",this).call(this);window.removeEventListener("simple-toast-hide",this.hideSimpleToast.bind(this));window.removeEventListener("simple-toast-show",this.showSimpleToast.bind(this))}},{key:"hideSimpleToast",value:function hideSimpleToast(e){this.hide()}},{key:"showSimpleToast",value:function showSimpleToast(e){var _this=this;if(e.detail.duration){this.duration=e.detail.duration}if(e.detail.text){this.text=e.detail.text}if(e.detail.classStyle){this.classStyle=e.detail.classStyle}if(e.detail.closeText){this.closeText=e.detail.closeText}if(e.detail.closeButton){this.closeButton=e.detail.closeButton}if(e.detail.eventCallback){this.eventCallback=e.detail.eventCallback}while(null!==(0,_polymerDom.dom)(this).firstChild){(0,_polymerDom.dom)(this).removeChild((0,_polymerDom.dom)(this).firstChild)}if(e.detail.slot){(0,_polymerDom.dom)(this).appendChild(e.detail.slot)}async.microTask.run(function(){setTimeout(function(){_this.show()},50)})}},{key:"show",value:function show(){this.$.toast.show()}},{key:"hide",value:function hide(){if(this.eventCallback){var evt=new CustomEvent(this.eventCallback,{bubbles:!0,cancelable:!0,detail:!0});this.dispatchEvent(evt)}this.$.toast.hide()}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_4a7f6c902fe211e9b3dc597c4e6cf99a())}},{key:"properties",get:function get(){return{opened:{name:"opened",type:"Boolean",value:!1,reflectToAttribute:!0},text:{name:"text",type:"String",value:"Saved"},classStyle:{name:"classStyle",type:"String",value:""},closeText:{name:"closeText",type:"String",value:"Close"},duration:{name:"duration",type:"Number",value:4e3},eventCallback:{name:"eventCallback",type:"String"},closeButton:{name:"closeButton",type:"Boolean",value:!0,reflectToAttribute:!0}}}},{key:"tag",get:function get(){return"simple-toast"}}]);return SimpleToast}(_polymerElement.PolymerElement);_exports.SimpleToast=SimpleToast;window.customElements.define(SimpleToast.tag,SimpleToast)});