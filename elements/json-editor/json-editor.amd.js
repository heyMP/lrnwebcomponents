define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/paper-input/paper-textarea.js"],function(_exports,_polymerElement,_paperTextarea){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.JsonEditor=void 0;function _templateObject_b8a4a2c01e1311e9ba85dbfe44dbc770(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n  \n}\n\n:host([hidden]) {\n  display: none;\n}\n:host([error]) paper-textarea {\n  --iron-autogrow-textarea: {\n    background-color: #ffeeee;\n  };\n}\npaper-textarea {\n  --iron-autogrow-textarea: {\n    font-family: \"Lucida Console\", Monaco, monospace;\n    font-weight: 600;\n    white-space: pre;\n    line-height: 20px;\n    padding: 9.5px;\n    margin: 0 0 10px;\n    font-size: 13px;\n    color: #000000;\n    word-break: break-all;\n    word-wrap: break-word;\n    background-color: #f5f5f5;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    transition: 0.3s linear all;\n    -webkit-transition: 0.3s linear all;\n    -moz-transition: 0.3s linear all;\n    -ms-transition: 0.3s linear all;\n    -o-transition: 0.3s linear all;\n};\n}</style>\n<paper-textarea \n  label=\"[[label]]\"\n  value=\"{{value}}\"\n  error-message=\"Invalid JSON!\"\n  readonly=\"[[disabled]]\"\n  invalid=\"[[error]]\"\n  max-rows=\"[[maxRows]]\"></paper-textarea>"]);_templateObject_b8a4a2c01e1311e9ba85dbfe44dbc770=function _templateObject_b8a4a2c01e1311e9ba85dbfe44dbc770(){return data};return data}var JsonEditor=function(_PolymerElement){babelHelpers.inherits(JsonEditor,_PolymerElement);function JsonEditor(){babelHelpers.classCallCheck(this,JsonEditor);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(JsonEditor).apply(this,arguments))}babelHelpers.createClass(JsonEditor,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(JsonEditor.prototype),"connectedCallback",this).call(this)}},{key:"_valueChanged",value:function _valueChanged(newValue,oldValue){try{var v=JSON.parse(newValue);if(v){this.error=!1}}catch(e){this.error=!0}}},{key:"_computeFormattedValue",value:function _computeFormattedValue(value){try{var formatted=JSON.stringify(JSON.parse(formatted),null,2);if(formatted!==value){this.value=formatted}}catch(e){}}},{key:"_computeCurrentData",value:function _computeCurrentData(value){try{return JSON.parse(value)}catch(e){}}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_b8a4a2c01e1311e9ba85dbfe44dbc770())}},{key:"properties",get:function get(){return{label:{name:"label",type:"String",value:"JSON data"},error:{name:"error",type:"Boolean",value:!1,reflectToAttribute:!0},disabled:{name:"disabled",type:"Boolean",value:!1,reflectToAttribute:!0},maxRows:{name:"maxRows",type:"Number",value:0,reflectToAttribute:!0},value:{name:"value",type:"String",value:"",reflectToAttribute:!1,observer:"_valueChanged"},formatTest:{name:"value",type:"String",computed:"_computeFormattedValue(value)"},currentData:{name:"currentData",type:"Object",notify:!0,computed:"_computeCurrentData(value)"}}}},{key:"tag",get:function get(){return"json-editor"}}]);return JsonEditor}(_polymerElement.PolymerElement);_exports.JsonEditor=JsonEditor;window.customElements.define(JsonEditor.tag,JsonEditor)});