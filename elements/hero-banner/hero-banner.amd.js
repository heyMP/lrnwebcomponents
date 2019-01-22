define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/iron-image/iron-image.js","./node_modules/@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_polymerLegacy,_materializecssStyles,_paperButton,_ironImage,_a11yBehaviors,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.HeroBanner=void 0;function _templateObject_8cb19be01e1411e9a3cc5b99e9d5838e(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"materializecss-styles\">\n      :host {\n        display: block;\n        width: 100%;\n        min-height: 600px;\n        height: 100%;\n        max-height: 600px;\n        overflow: hidden;\n        position: relative;\n      }\n      .image {\n        position: absolute;\n        left: 0;\n        right: 0;\n      }\n      .itemwrapper {\n        position: absolute;\n        bottom: 10%;\n        left: 10%;\n        width: 50%;\n      }\n      .title {\n        background-color: rgba(0, 0, 0, 0.5);\n        padding: 10px 16px;\n        font-size: 32px;\n        color: #ffffff;\n        margin: 4px 0;\n        font-family: \"Roboto\";\n        font-weight: 500;\n      }\n      .details {\n        background-color: rgba(0, 0, 0, 0.5);\n        padding: 10px 16px;\n        font-size: 16px;\n        color: #ffffff;\n        margin: 4px 0;\n        font-family: \"Roboto\";\n      }\n      .linkbutton {\n        padding: 0;\n        margin: 8px 0;\n        color: #ffffff;\n        text-decoration: none;\n        font-family: \"Roboto\";\n      }\n      .linkbutton paper-button {\n        text-transform: none;\n        font-weight: bold;\n      }\n      @media screen and (max-width: 720px) {\n        .title {\n          font-size: 20px;\n        }\n        .details {\n          font-size: 12px;\n        }\n        .itemwrapper {\n          left: 5%;\n          width: 50%;\n        }\n      }\n      @media screen and (max-width: 500px) {\n        .title {\n          font-size: 16px;\n        }\n        .details {\n          display: none;\n        }\n        .itemwrapper {\n          left: 0;\n          width: 300px;\n        }\n      }\n    </style>\n    <iron-image\n      class=\"image\"\n      src$=\"[[image]]\"\n      fade=\"\"\n      preload=\"\"\n      sizing=\"cover\"\n      style=\"background-color:grey;width: 100%;height: 100%;\"\n    ></iron-image>\n    <div class=\"itemwrapper\">\n      <div class=\"title\">[[title]]</div>\n      <div class=\"details\">[[details]]</div>\n      <a class=\"linkbutton\" href$=\"[[buttonLink]]\"\n        ><paper-button\n          raised=\"\"\n          class$=\"[[buttonColorClass]] [[textColorClass]]\"\n          >[[buttonText]]</paper-button\n        ></a\n      >\n    </div>\n  "],["\n    <style include=\"materializecss-styles\">\n      :host {\n        display: block;\n        width: 100%;\n        min-height: 600px;\n        height: 100%;\n        max-height: 600px;\n        overflow: hidden;\n        position: relative;\n      }\n      .image {\n        position: absolute;\n        left: 0;\n        right: 0;\n      }\n      .itemwrapper {\n        position: absolute;\n        bottom: 10%;\n        left: 10%;\n        width: 50%;\n      }\n      .title {\n        background-color: rgba(0, 0, 0, 0.5);\n        padding: 10px 16px;\n        font-size: 32px;\n        color: #ffffff;\n        margin: 4px 0;\n        font-family: \"Roboto\";\n        font-weight: 500;\n      }\n      .details {\n        background-color: rgba(0, 0, 0, 0.5);\n        padding: 10px 16px;\n        font-size: 16px;\n        color: #ffffff;\n        margin: 4px 0;\n        font-family: \"Roboto\";\n      }\n      .linkbutton {\n        padding: 0;\n        margin: 8px 0;\n        color: #ffffff;\n        text-decoration: none;\n        font-family: \"Roboto\";\n      }\n      .linkbutton paper-button {\n        text-transform: none;\n        font-weight: bold;\n      }\n      @media screen and (max-width: 720px) {\n        .title {\n          font-size: 20px;\n        }\n        .details {\n          font-size: 12px;\n        }\n        .itemwrapper {\n          left: 5%;\n          width: 50%;\n        }\n      }\n      @media screen and (max-width: 500px) {\n        .title {\n          font-size: 16px;\n        }\n        .details {\n          display: none;\n        }\n        .itemwrapper {\n          left: 0;\n          width: 300px;\n        }\n      }\n    </style>\n    <iron-image\n      class=\"image\"\n      src\\$=\"[[image]]\"\n      fade=\"\"\n      preload=\"\"\n      sizing=\"cover\"\n      style=\"background-color:grey;width: 100%;height: 100%;\"\n    ></iron-image>\n    <div class=\"itemwrapper\">\n      <div class=\"title\">[[title]]</div>\n      <div class=\"details\">[[details]]</div>\n      <a class=\"linkbutton\" href\\$=\"[[buttonLink]]\"\n        ><paper-button\n          raised=\"\"\n          class\\$=\"[[buttonColorClass]] [[textColorClass]]\"\n          >[[buttonText]]</paper-button\n        ></a\n      >\n    </div>\n  "]);_templateObject_8cb19be01e1411e9a3cc5b99e9d5838e=function _templateObject_8cb19be01e1411e9a3cc5b99e9d5838e(){return data};return data}var HeroBanner=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_8cb19be01e1411e9a3cc5b99e9d5838e()),is:"hero-banner",behaviors:[HAXBehaviors.PropertiesBehaviors,A11yBehaviors.A11y,MaterializeCSSBehaviors.ColorBehaviors],properties:{title:{type:String,value:"Title"},image:{type:String},details:{type:String,value:"Details"},buttonText:{type:String,value:"Find out more"},buttonColor:{type:String,value:"red darken-4",observer:"_buttonColorChanged"},buttonColorClass:{type:String,reflectToAttribute:!0,computed:"_computeColorClass(buttonColor)"},buttonLink:{type:String},textColor:{type:String,value:"#FFFFFF",reflectToAttribute:!0},textColorClass:{type:String,value:null,reflectToAttribute:!0,computed:"_computeColorClass(textColor)"}},_buttonColorChanged:function _buttonColorChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&null!=newValue){this.computeTextPropContrast("textColor","buttonColor")}},_computeColorClass:function _computeColorClass(color){if(null!=color&&"#ffffff"==color.toLowerCase()){return"white-text"}else if(null!=color&&"#000000"==color){return"black-text"}else if(null!=color&&"#"==color.substring(0,1)){return this._colorTransform(color.toLowerCase(),"","")}},attached:function attached(){var props={canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Hero image",description:"Typically fancy banner image calling your attention to something.",icon:"image:panorama",color:"red",groups:["Image","Media"],handles:[{type:"image",source:"image",title:"title",description:"details",link:"buttonLink"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"URL of the image",inputMethod:"textfield",icon:"image:panorama"},{property:"details",title:"Details",description:"Additional text detail / teaser data",inputMethod:"textfield",icon:"editor:text-fields"},{property:"buttonText",title:"Button",description:"Label of the button",inputMethod:"textfield",icon:"icons:radio-button-unchecked"},{property:"buttonColor",title:"Button - Color",description:"Color of the button",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"buttonLink",title:"Button - Link",description:"Label of the button",inputMethod:"textfield",validationType:"url",icon:"icons:link"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"URL of the image",inputMethod:"textfield",icon:"image:panorama"},{property:"details",title:"Details",description:"Additional text detail / teaser data",inputMethod:"textfield",icon:"editor:text-fields"},{property:"buttonText",title:"Button",description:"Label of the button",inputMethod:"textfield",icon:"icons:radio-button-unchecked"},{property:"buttonColor",title:"Button - Color",description:"Color of the button",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"buttonLink",title:"Button - Link",description:"Label of the button",inputMethod:"textfield",validationType:"url",icon:"icons:link"}],advanced:[]}};this.setHaxProperties(props)}});_exports.HeroBanner=HeroBanner});