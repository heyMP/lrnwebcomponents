define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/app-layout/app-layout.js","./node_modules/@lrnwebcomponents/img-pan-zoom/img-pan-zoom.js","./node_modules/@lrnwebcomponents/lrnsys-button/lrnsys-button.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/iron-icons/image-icons.js","./node_modules/@lrnwebcomponents/materializecss-styles/lib/colors.js"],function(_exports,_polymerLegacy,_appLayout,_imgPanZoom,_lrnsysButton,_ironIcons,_imageIcons,_colors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.ImageInspector=void 0;function _templateObject_8e098ac01e1411e995a6373ecbd2f740(){var data=babelHelpers.taggedTemplateLiteral(["\n    <custom-style>\n      <style include=\"materializecss-styles-colors\">\n        :host {\n          display: block;\n          --image-inspector-background: #dddddd;\n        }\n\n        app-toolbar {\n          width: 90%;\n          background: var(--image-inspector-background);\n          margin: 32px auto;\n          z-index: 1;\n          display: flex;\n          text-align: center;\n          justify-content: space-evenly;\n        }\n\n        lrnsys-button {\n          display: inline-flex;\n        }\n\n        .top {\n          top: 128px;\n        }\n      </style>\n    </custom-style>\n    <app-toolbar>\n      <lrnsys-button\n        alt=\"Zoom in\"\n        icon=\"zoom-in\"\n        on-tap=\"zoomIn\"\n        hover-class=\"[[hoverClass]]\"\n      ></lrnsys-button>\n      <lrnsys-button\n        alt=\"Zoom out\"\n        icon=\"zoom-out\"\n        on-tap=\"zoomOut\"\n        hover-class=\"[[hoverClass]]\"\n      ></lrnsys-button>\n      <lrnsys-button\n        alt=\"Rotate right\"\n        icon=\"image:rotate-right\"\n        on-tap=\"rotateRight\"\n        hover-class=\"[[hoverClass]]\"\n      ></lrnsys-button>\n      <lrnsys-button\n        alt=\"Rotate left\"\n        icon=\"image:rotate-left\"\n        on-tap=\"rotateLeft\"\n        hover-class=\"[[hoverClass]]\"\n      ></lrnsys-button>\n      <lrnsys-button\n        alt=\"Mirror image\"\n        icon=\"image:flip\"\n        on-tap=\"mirrorImage\"\n        hover-class=\"[[hoverClass]]\"\n      ></lrnsys-button>\n      <lrnsys-button\n        alt=\"Open in new window\"\n        icon=\"launch\"\n        href=\"[[src]]\"\n        target=\"_blank\"\n        hover-class=\"[[hoverClass]]\"\n      ></lrnsys-button>\n      <slot name=\"toolbar\"></slot>\n    </app-toolbar>\n    <img-pan-zoom id=\"img\" src=\"[[src]]\"></img-pan-zoom>\n    <slot></slot>\n  "]);_templateObject_8e098ac01e1411e995a6373ecbd2f740=function _templateObject_8e098ac01e1411e995a6373ecbd2f740(){return data};return data}var ImageInspector=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_8e098ac01e1411e995a6373ecbd2f740()),is:"image-inspector",properties:{degrees:{type:Number,value:0,reflectToAttribute:!0},src:{type:String,reflectToAttribute:!0},hoverClass:{type:String,value:"blue white-text"}},rotateRight:function rotateRight(){var img=this.$.img;this.degrees+=90;img.style.transform="rotate("+this.degrees+"deg)";img.toggleClass("top")},rotateLeft:function rotateLeft(){var img=this.$.img;this.degrees+=-90;img.style.transform="rotate("+this.degrees+"deg)";img.toggleClass("top")},mirrorImage:function mirrorImage(){var img=this.$.img;if("scaleX(1)"===img.style.transform){img.style.transform="scaleX(-1)"}else{img.style.transform="scaleX(1)"}},zoomIn:function zoomIn(){this.$.img.zoomIn()},zoomOut:function zoomOut(){this.$.img.zoomOut()}});_exports.ImageInspector=ImageInspector});