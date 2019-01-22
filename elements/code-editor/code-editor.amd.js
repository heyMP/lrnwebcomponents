define(["exports","meta","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/polymer/lib/utils/async.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./lib/monaco-element/monaco-element.js","./lib/code-pen-button.js"],function(_exports,meta,_polymerLegacy,_flattenedNodesObserver,_polymerDom,async,_HAXWiring,_schemaBehaviors,_monacoElement,_codePenButton){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.CodeEditor=void 0;meta=babelHelpers.interopRequireWildcard(meta);async=babelHelpers.interopRequireWildcard(async);function _templateObject_82f188f01e1311e9b549515ec9fb67e9(){var data=babelHelpers.taggedTemplateLiteral(["\n    <custom-style>\n      <style>\n        :host {\n          display: block;\n          padding: 16px;\n        }\n        .code-pen-container {\n          width: 100%;\n          display: block;\n          background-color: var(--code-pen-button-color, #222222);\n          height: 40px;\n        }\n        [hidden] {\n          display: none !important;\n        }\n        code-pen-button {\n          float: right;\n          height: 40px;\n        }\n        h3 {\n          color: var(--code-pen-title-color, #222222);\n        }\n        #codeeditor {\n          height: 100%;\n        }\n      </style>\n    </custom-style>\n    <h3 hidden$=\"[[!title]]\">[[title]]</h3>\n    <monaco-element\n      id=\"codeeditor\"\n      lib-path=\"[[__libPath]]\"\n      value=\"[[editorValue]]\"\n      language=\"[[language]]\"\n      theme=\"[[theme]]\"\n      on-value-changed=\"_editorDataChanged\"\n      font-size$=\"[[fontSize]]\"\n      readonly$=\"[[readOnly]]\"\n    >\n    </monaco-element>\n    <div class=\"code-pen-container\" hidden$=\"[[!showCodePen]]\">\n      <code-pen-button data=\"[[codePenData]]\"></code-pen-button>\n    </div>\n  "],["\n    <custom-style>\n      <style>\n        :host {\n          display: block;\n          padding: 16px;\n        }\n        .code-pen-container {\n          width: 100%;\n          display: block;\n          background-color: var(--code-pen-button-color, #222222);\n          height: 40px;\n        }\n        [hidden] {\n          display: none !important;\n        }\n        code-pen-button {\n          float: right;\n          height: 40px;\n        }\n        h3 {\n          color: var(--code-pen-title-color, #222222);\n        }\n        #codeeditor {\n          height: 100%;\n        }\n      </style>\n    </custom-style>\n    <h3 hidden$=\"[[!title]]\">[[title]]</h3>\n    <monaco-element\n      id=\"codeeditor\"\n      lib-path=\"[[__libPath]]\"\n      value=\"[[editorValue]]\"\n      language=\"[[language]]\"\n      theme=\"[[theme]]\"\n      on-value-changed=\"_editorDataChanged\"\n      font-size\\$=\"[[fontSize]]\"\n      readonly\\$=\"[[readOnly]]\"\n    >\n    </monaco-element>\n    <div class=\"code-pen-container\" hidden$=\"[[!showCodePen]]\">\n      <code-pen-button data=\"[[codePenData]]\"></code-pen-button>\n    </div>\n  "]);_templateObject_82f188f01e1311e9b549515ec9fb67e9=function _templateObject_82f188f01e1311e9b549515ec9fb67e9(){return data};return data}var CodeEditor=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_82f188f01e1311e9b549515ec9fb67e9()),is:"code-editor",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],properties:{title:{type:String},showCodePen:{type:Boolean,value:!1,reflectToAttribute:!0},readOnly:{type:Boolean,value:!1,reflectToAttribute:!0},codePenData:{type:Object,computed:"_computeCodePenData(title, value)"},editorValue:{type:String,value:""},value:{type:String,notify:!0},theme:{type:String,value:"vs-dark"},mode:{type:String,observer:"_modeChanged"},language:{type:String,value:"javascript"},fontSize:{type:String,value:"16px"},minLines:{type:Number,value:10},maxLines:{type:Number,value:25}},_computeCodePenData:function _computeCodePenData(title,editorValue){return{title:title,html:editorValue}},_modeChanged:function _modeChanged(newValue){this.language=this.mode},_editorDataChanged:function _editorDataChanged(e){this.value=e.detail},updateEditorValue:function updateEditorValue(){var content="",children=this.queryEffectiveChildren("template");if(!children){console.warn("code-editor works best with a template tag provided in light dom");children=(0,_polymerDom.dom)(this).getEffectiveChildNodes();if(0<children.length){for(var j=0,len2=children.length;j<len2;j++){if(babelHelpers.typeof(children[j].tagName)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){content+=children[j].outerHTML}else{content+=children[j].textContent}}}}else{content=children.innerHTML}this.$.codeeditor.value=content.trim()},preProcessHaxNodeToContent:function preProcessHaxNodeToContent(clone){clone.editorValue=null;clone.codePenData=null;clone.value=null;clone.removeAttribute("value");clone.removeAttribute("code-pen-data");return clone},created:function created(){this.__libPath=meta.url+"/../../../monaco-editor/min/vs"},ready:function ready(){var _this=this;this._observer=new _flattenedNodesObserver.FlattenedNodesObserver(this,function(info){if(0<info.addedNodes.length){info.addedNodes.map(function(node){_this.updateEditorValue()})}if(0<info.removedNodes.length){info.removedNodes.map(function(node){_this.updateEditorValue()})}})},attached:function attached(){var _this2=this;async.microTask.run(function(){setTimeout(function(){_this2.$.codeeditor.initIFrame()},1e3)});var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Code editor",description:"Edit code in the browser with minor HTML validation",icon:"icons:code",color:"blue",groups:["Code","Development"],handles:[{type:"code",code:""}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"},{property:"showCodePen",title:"Code pen button",description:"Play with this on code pen",inputMethod:"boolean",icon:"icons:code"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"},{property:"showCodePen",title:"Code pen button",description:"Play with this on code pen",inputMethod:"boolean",icon:"icons:code"},{slot:"",title:"Code",description:"The code to present to the user",inputMethod:"code-editor",icon:"editor:title"}],advanced:[]}};this.setHaxProperties(props)}});_exports.CodeEditor=CodeEditor});