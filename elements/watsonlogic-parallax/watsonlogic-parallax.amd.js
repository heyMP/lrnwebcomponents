define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js"],function(_exports,_polymerLegacy){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.WatsonlogicParallax=void 0;function _templateObject_6034dd801e1311e9acd6b7706bb28443(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        --parallax-background-height: 300px;\n        --parallax-slogan-top: 150px;\n        --parallax-background-image: url(\"https://static.pexels.com/photos/2324/skyline-buildings-new-york-skyscrapers.jpg\");\n      }\n\n      .parallax-background {\n        background: var(--parallax-background-image);\n        background-attachment: fixed;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        height: var(--parallax-background-height);\n        position: relative;\n      }\n\n      .slogan {\n        bottom: 0;\n        left: 0;\n        opacity: 1;\n        position: absolute;\n        right: 0;\n        text-align: center;\n        top: var(--parallax-slogan-top);\n        transform-origin: center top !important;\n      }\n    </style>\n\n    <div class=\"parallax-background\">\n      <div id=\"slogan\" class=\"slogan\">[[parallaxText]]</div>\n    </div>\n  "]);_templateObject_6034dd801e1311e9acd6b7706bb28443=function _templateObject_6034dd801e1311e9acd6b7706bb28443(){return data};return data}var WatsonlogicParallax=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_6034dd801e1311e9acd6b7706bb28443()),is:"watsonlogic-parallax",properties:{parallaxText:{type:String},parallaxImage:{type:String,notify:!0,reflectToAttribute:!0},parallaxImageHeight:{type:String,notify:!0,reflectToAttribute:!0}},ready:function ready(){var self=this;self.parallaxImage=self.parallaxImage||"https://static.pexels.com/photos/2324/skyline-buildings-new-york-skyscrapers.jpg";Number.isNaN(parseInt(self.parallaxImageHeight))?"300":parseInt(self.parallaxImageHeight);this.updateStyles({"--parallax-background-image":"url("+self.parallaxImage+")","--parallax-background-height":self.parallaxImageHeight+"px","--parallax-slogan-top":parseInt(self.parallaxImageHeight)/2+"px"})}});_exports.WatsonlogicParallax=WatsonlogicParallax});