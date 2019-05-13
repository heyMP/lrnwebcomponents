!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("./paper-contact.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js","./paper-contact.js"],e):e((t=t||self).polymerLegacy_js,t.polymer_dom_js)}(this,function(t,e){"use strict";window.PaperContactBehavior={openInSameTab:function(t){var e=this._getContent();e&&window.location.assign(encodeURI(this._getTargetUrl(e)))},openInBlankTab:function(t){var e=this._getContent();e&&window.open(encodeURI(this._getTargetUrl(e),"_blank"))},_getContent:function(t){var o=e.dom(this).getEffectiveChildNodes();return o.length<=0?null:e.dom(o[0]).textContent}};var o=document.createElement("div");o.setAttribute("style","display: none;"),o.innerHTML='<dom-module id="paper-contact-shared-styles">\n\t<template>\n\t\t<style>\n\t\t\t:host {\n\t\t\t\t@apply --layout-vertical;\n\t\t\t}\n\n\t\t\t.item {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\n\t\t\t.icon {\n\t\t\t\tcolor: var(--disabled-text-color);\n\t\t\t}\n\n\t\t\t.text {\n\t\t\t\tpadding-top: 14px;\n\t\t\t\tpadding-bottom: 14px;\n\t\t\t\twhite-space: pre-wrap;\n\t\t\t\t@apply --paper-font-body1;\n\t\t\t}\n\t\t</style>\n\t</template>\n</dom-module>',document.head.appendChild(o),t.Polymer({is:"paper-contact-email",behaviors:[PaperContactBehavior],_getTargetUrl:function(t){return"mailto:"+encodeURIComponent(t)}}),t.Polymer({is:"paper-contact-phone",behaviors:[PaperContactBehavior],_getTargetUrl:function(t){return"tel:"+t}}),t.Polymer({is:"paper-contact-mobile",behaviors:[PaperContactBehavior],_getTargetUrl:function(t){return"tel:"+t}}),t.Polymer({is:"paper-contact-linkedin",behaviors:[PaperContactBehavior],_getTargetUrl:function(t){return t}}),t.Polymer({is:"paper-contact-twitter",behaviors:[PaperContactBehavior],_getTargetUrl:function(t){return"https://twitter.com/#!/"+t}}),t.Polymer({is:"paper-contact-skype",behaviors:[PaperContactBehavior],_getTargetUrl:function(t){return"skype:"+t+"?call"}}),t.Polymer({is:"paper-contact-address",properties:{latitude:Number,longitude:Number},behaviors:[PaperContactBehavior],_getTargetUrl:function(t){var e="https://www.google.com/maps/search/".concat(t);return this.latitude&&this.longitude&&(e+="/@".concat(this.latitude,"+").concat(this.longitude)),e}}),t.Polymer({is:"paper-contact-list"})});
//# sourceMappingURL=paper-contact.umd.js.map