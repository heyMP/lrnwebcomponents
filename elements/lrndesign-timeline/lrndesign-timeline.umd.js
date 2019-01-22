!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/responsive-utility/responsive-utility.js"),require("@polymer/polymer/lib/elements/dom-repeat.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/responsive-utility/responsive-utility.js","@polymer/polymer/lib/elements/dom-repeat.js"],n):n((e=e||self).LrndesignTimeline={},e.polymerElement_js,e.simpleColors_js)}(this,function(e,n,t){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function a(e,n,t){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var i=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=r(e)););return e}(e,n);if(i){var o=Object.getOwnPropertyDescriptor(i,n);return o.get?o.get.call(t):o.value}})(e,n,t||e)}function d(){var e,n,t=(e=['\n<style>:host {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 160%;\n  display: block;\n  --lrndesign-timeline-color: var(--simple-colors-default-theme-grey-8, #444);\n  --lrndesign-timeline-background: #f4f4f4;\n  --lrndesign-timeline-border: var(--simple-colors-default-theme-grey-5, #bbb);\n  --lrndesign-timeline-accent: #000;\n  --lrndesign-timeline-accent-background: #fff;\n  --lrndesign-timeline-accent-border: var(--simple-colors-default-theme-accent-8, #444);\n  --lrndesign-timeline-header: var(--simple-colors-default-theme-accent-1, #fff);\n  --lrndesign-timeline-header-accent: var(--simple-colors-default-theme-accent-8, #444);\n}\n:host([dark]){\n  --lrndesign-timeline-background: #1b1b1b;\n}\n:host([hidden]) {\n  display: none;\n}\n:host #timeline {\n  display: block;\n  border-radius: 3px;\n  border: 1px solid var(--lrndesign-timeline-border);\n  border-left: 3px solid var(--lrndesign-timeline-accent-border);\n}\n:host #events {\n  padding: 0;\n  width: 100%;\n}\n:host .heading {\n  margin: 0;\n}\n:host .heading h2 {\n  font-size: 24px;\n  font-weight: 300;\n  color: var(--lrndesign-timeline-header-accent);\n}\n:host .heading h2,\n:host .details,\n:host .media {\n  padding: 0 40px;\n}\n:host .details {\n  margin: 15px 0; \n}\n:host .media { \n  opacity: 1;\n  transition: opacity 0.5s;\n}\n:host .media, \n:host .media * { \n  margin: 0 auto;\n  max-width: 100%;\n  max-height: 260px;\n}\n:host(:not([timeline-size*="s"])) #timeline {\n  background-color: var(--lrndesign-timeline-background);\n}\n:host(:not([timeline-size*="s"])) #events {\n  height: 300px;\n  position: relative;\n  overflow-y: scroll;\n}\n:host(:not([timeline-size*="s"])) .event {\n  position: static;\n  top: 0;\n}\n:host(:not([timeline-size*="s"])) .event-overview {\n  padding: 0;\n  position: sticky;\n  top: 0;\n}\n:host(:not([timeline-size*="s"])) .heading {\n  position: absolute;\n  top: 0;\n  padding: 10px 0;\n  overflow: hidden;\n  background-color: transparent;\n  width: calc(55% + 30px);\n}\n:host(:not([timeline-size*="s"])) .event[has-media][selected] .heading {\n  z-index: 2;\n}\n:host(:not([timeline-size*="s"])) .event[has-media] .heading:after {\n  content: \' \';\n  z-index: 200;\n  position: absolute;\n  top: 42px;\n  right: 30px;\n  width: 0; \n  padding: 0; \n  border-top: 0px solid transparent;\n  border-bottom: 0px solid transparent;\n  border-left: 0px solid transparent;\n  transition: all 0.3s;\n  transition-delay: 0.2s;\n}\n:host(:not([timeline-size*="s"])) .event[has-media][selected] .heading:after {\n  top: 7px;\n  right: 0px;\n  border-top: 35px solid transparent;\n  border-bottom: 35px solid transparent; \n  border-left: 35px solid var(--lrndesign-timeline-header-accent);\n}\n:host(:not([timeline-size*="s"])) .heading h2 {\n  margin: 7px 48px 0 20px;\n  padding: 0 20px;\n  line-height: 50px;\n  height: 50px;\n  color: var(--lrndesign-timeline-color);\n  background-color: var(--lrndesign-timeline-background);\n  transition: background-color 0.3s;\n}\n:host(:not([timeline-size*="s"])) .event[selected] .heading h2 {\n  background-color: var(--lrndesign-timeline-header-accent);\n  color:  var(--lrndesign-timeline-header);\n}\n:host(:not([timeline-size*="s"])) .event[has-media] .heading h2:after {\n  content: \'\';\n  position: absolute;\n  left: calc(100% - 48px);\n  height: 50px;\n  width: 0px;\n  transition: all 0.3s;\n  background-color: var(--lrndesign-timeline-background);\n}\n:host(:not([timeline-size*="s"])) .event[has-media][selected] .heading h2:after {\n  width: 13px;\n  background-color: var(--lrndesign-timeline-header-accent);\n}\n:host(:not([timeline-size*="s"])) .media-outer {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  right: 0;\n  width: 45%;\n  height: 300px;\n}\n:host(:not([timeline-size*="s"])) .media {\n  display: flex;\n  padding: 20px 20px 20px 50px;\n  opacity: 0;\n  transition: opacity 0.3s delay 0.3s;\n}\n:host(:not([timeline-size*="s"])) .event[selected] .media {\n  opacity: 1;\n  transition-delay: 0s;\n}\n:host(:not([timeline-size*="s"])) .details {\n  padding: 67px 20px 20px;\n  margin: 0 20px;\n  width: calc(55% - 80px);\n  color: var(--lrndesign-timeline-color);\n  background-color: var(--lrndesign-timeline-background);\n  border: 1px solid var(--lrndesign-timeline-background);\n  border-radius: 3px;\n  transition: all 0.5s;\n}\n:host(:not([timeline-size*="s"])) .event:last-of-type .details {\n  min-height: 180px;\n}\n:host(:not([timeline-size*="s"])) .event[selected] .details {\n  color: var(--lrndesign-timeline-accent);\n  background-color:  var(--lrndesign-timeline-accent-background);\n  border: 1px solid var(--lrndesign-timeline-border);\n  box-shadow: 0 2px 2px var(--lrndesign-timeline-border);\n}\n:host(:not([timeline-size*="s"])) .event:first-of-type[selected] .details {\n  border-top: 1px solid var(--lrndesign-timeline-background);\n}\n:host(:not([timeline-size*="s"])) .event:last-of-type[selected] .details {\n  border-bottom: 1px solid var(--lrndesign-timeline-background);\n}</style>\n<style is="custom-style" include="simple-colors"></style>\n<article>\n  <h1 id="title">[[title]]</h1>\n  <slot></slot>\n  <div id="timeline">\n      <div id="events" on-scroll="_onScroll">\n        <template id="repeat" is="dom-repeat" items="[[eventsData]]" as="event" index-as="index" restamp>\n          <section class="event" has-media$="[[_isSet(event.image)]]">\n            <div class="event-overview">\n              <div class="heading"><h2>[[event.heading]]</h2></div>\n              <div class="media-outer">\n                <template is="dom-if" if="[[_isSet(event.image)]]" restamp>\n                  <div class="media">\n                    <image alt$="[[event.image.alt]]" src$="[[event.image.src]]"/>\n                  </div>\n                </template>\n              </div>\n            </div>\n            <div class="details">[[event.details]]</div>\n          </section>\n        </template>\n    </div>\n  </div>\n</article>'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return d=function(){return t},t}var c=function(e){function c(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),l(this,r(c).apply(this,arguments))}var p,m,u;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(c,t.SimpleColors),p=c,u=[{key:"template",get:function(){return n.html(d())}},{key:"properties",get:function(){return{title:{type:"String",value:null},events:{type:"Array",value:[]},eventsData:{type:"Array",computed:"_sanitizeEvents(events)"},timelineSize:{type:"String",value:"xs",reflectToAttribute:!0}}}},{key:"tag",get:function(){return"lrndesign-timeline"}},{key:"behaviors",get:function(){return[t.SimpleColors]}}],(m=[{key:"connectedCallback",value:function(){a(r(c.prototype),"connectedCallback",this).call(this),window.ResponsiveUtility.requestAvailability(),window.dispatchEvent(new CustomEvent("responsive-element",{detail:{element:this,attribute:"timeline-size",relativeToParent:!0}})),this._checkScroll()}},{key:"_checkScroll",value:function(){var e=this.shadowRoot.querySelectorAll(".event");e.length<1&&this.$.repeat.render(),(e=this.shadowRoot.querySelectorAll(".event")).forEach(function(n){var t=n.offsetTop,i=e[0].offsetTop+50+n.parentNode.scrollTop,o=n.offsetTop+n.offsetHeight;i>t&&i<o?n.setAttribute("selected",!0):n.removeAttribute("selected")})}},{key:"_isMediaType",value:function(e,n){return!(!this._isSet(e.media)||!this._isSet(e.media.type))&&e.media.type===n}},{key:"_isSet",value:function(e){return null!=e}},{key:"_sanitizeEvents",value:function(e){return"string"==typeof e&&(e=JSON.parse(e)),"object"===i(e)&&e.constructor!==Array&&(e=Object.keys(e).map(function(n){return e[n]})),e}},{key:"_onScroll",value:function(e){this._checkScroll()}}])&&o(p.prototype,m),u&&o(p,u),c}();window.customElements.define(c.tag,c),e.LrndesignTimeline=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-timeline.umd.js.map
