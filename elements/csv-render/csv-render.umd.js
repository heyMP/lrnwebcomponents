!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@lrnwebcomponents/hexagon-loader/hexagon-loader.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@lrnwebcomponents/hexagon-loader/hexagon-loader.js","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"],t):t((e=e||self).CsvRender={},null,null,e.litElement_js,e.simpleColors_js,null,null,null,e.IntersectionObserverMixin_js)}(this,function(e,t,n,o,r,i,l,a,c){"use strict";function s(e,t,n,o,r,i,l){try{var a=e[i](l),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(o,r)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){f(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function j(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function x(){var e=w([" <td>","</td> "]);return x=function(){return e},e}function k(){var e=w(["\n              <tr>\n                ","\n              </tr>\n            "]);return k=function(){return e},e}function S(){var e=w([' <th scope="col">',"</th> "]);return S=function(){return e},e}function P(){var e=w(["\n              <caption>\n                ","\n              </caption>\n            "]);return P=function(){return e},e}function _(){var e=w(['\n      <hexagon-loader\n        id="loading"\n        accent-color="','"\n        ?loading="','"\n        item-count="4"\n        size="small"\n      ></hexagon-loader>\n      <a href="','" id="download" tabindex="-1">\n        <simple-icon-button id="ficon" icon="file-download"></simple-icon-button>\n      </a>\n      <simple-tooltip for="ficon" offset="14" position="top"\n        >Download table data</simple-tooltip>\n      <table class="table" summary="','">\n        ',"\n        <thead>\n          <tr>\n            ","\n          </tr>\n        </thead>\n        <tbody>\n          ","\n        </tbody>\n      </table>\n    "]);return _=function(){return e},e}function R(){var e=w(['\n        :host {\n          display: block;\n        }\n        .table {\n          width: 100%;\n          border: 1px solid var(--simple-colors-default-theme-accent-6);\n          border-collapse: collapse;\n          white-space: nowrap;\n          font-size: 16px;\n          background-color: var(--simple-colors-default-theme-grey-1);\n        }\n        .table thead {\n          padding-bottom: 0.16px;\n          position: sticky;\n        }\n        .table caption {\n          background-color: var(--simple-colors-default-theme-accent-1);\n          font-weight: bold;\n          padding: 8px;\n          border: 1px solid var(--simple-colors-default-theme-accent-6);\n          border-bottom: none;\n        }\n        :host(:not([accent-color])) .table caption,\n        :host([accent-color="grey"]) .table caption {\n          background-color: var(--simple-colors-default-theme-accent-2);\n        }\n        .table tbody tr {\n          position: relative;\n          height: 48px;\n          -webkit-transition-duration: 0.28s;\n          transition-duration: 0.28s;\n          -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          -webkit-transition-property: background-color;\n          transition-property: background-color;\n        }\n        .table tbody tr:hover {\n          background-color: var(--simple-colors-default-theme-accent-1);\n        }\n        :host(:not([accent-color])) .table tbody tr:hover,\n        :host([accent-color="grey"]) .table tbody tr:hover {\n          background-color: var(--simple-colors-default-theme-accent-2);\n        }\n        .table td,\n        .table thead th,\n        .table th {\n          padding: 0 1.125em;\n          text-align: left;\n        }\n        .table td {\n          border-top: 1px solid var(--simple-colors-default-theme-accent-6);\n          border-bottom: 1px solid var(--simple-colors-default-theme-accent-6);\n        }\n        .table th {\n          position: relative;\n          vertical-align: bottom;\n          text-overflow: ellipsis;\n          font-size: 16px;\n          font-weight: bold;\n          line-height: 24px;\n          letter-spacing: 0;\n          color: rgba(0, 0, 0, 0.54);\n          height: 48px;\n          padding-bottom: 8px;\n          box-sizing: border-box;\n        }\n        #loading {\n          position: absolute;\n          left: calc(50% - 70px);\n        }\n        simple-icon {\n          display: inline-flex;\n          margin: 0;\n          padding: 0;\n        }\n        #download button:hover,\n        #download button:focus,\n        #download button:active {\n          color: var(--simple-colors-default-theme-accent-8);\n          outline: 2px solid var(--simple-colors-default-theme-accent-6);\n        }\n      ']);return R=function(){return e},e}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(n,c.IntersectionObserverMixin(r.SimpleColors));var t=g(n);function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=t.call(this)).loading=!1,e.table=[],e.tableHeadings=[],e.tableData="",e}return p(n,null,[{key:"styles",get:function(){return[].concat(j(v(m(n),"styles",this)),[o.css(R())])}}]),p(n,[{key:"updated",value:function(e){var t=this;v(m(n.prototype),"updated",this)&&v(m(n.prototype),"updated",this).call(this,e),e.forEach(function(e,n){"elementVisible"==n&&t.elementVisible,["dataSource","elementVisible"].includes(n)&&t.dataSource&&t.elementVisible&&(clearTimeout(t.__debouce),t.loading=!0,t.__debouce=setTimeout(function(){t.loadCSVData()},500))})}},{key:"render",value:function(){return o.html(_(),this.accentColor,this.loading,this.dataSource,this.summary,this.caption?o.html(P(),this.caption):"",this.tableHeadings.map(function(e){return o.html(S(),e)}),this.table.map(function(e){return o.html(k(),e.map(function(e){return o.html(x(),e)}))}))}},{key:"handleResponse",value:function(){this.table=this.CSVtoArray(this.tableData),this.tableHeadings=this.table.shift(),this.loading=!1}},{key:"CSVtoArray",value:function(e){var t,n="",o=[""],r=[o],i=0,l=0,a=!0;for(t in e)'"'===(t=e[t])?(a&&t===n&&(o[i]+=t),a=!a):","===t&&a?t=o[++i]="":"\n"===t&&a?("\r"===n&&(o[i]=o[i].slice(0,-1)),o=r[++l]=[t=""],i=0):o[i]+=t,n=t;return r}},{key:"loadCSVData",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.dataSource,{method:this.method}).then(function(e){if(e.ok)return e.text()}).then(function(e){t.tableData=e,t.handleResponse()});case 2:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(o,r){var i=e.apply(t,n);function l(e){s(i,o,r,l,a,"next",e)}function a(e){s(i,o,r,l,a,"throw",e)}l(void 0)})});return function(){return t.apply(this,arguments)}}()}],[{key:"tag",get:function(){return"csv-render"}},{key:"properties",get:function(){return d(d({},v(m(n),"properties",this)),{},{dataSource:{type:String,attribute:"data-source"},loading:{type:Boolean},caption:{type:String},summary:{type:String},table:{type:Array},tableHeadings:{type:Array},tableData:{type:String,attribute:"table-data"}})}}]),n}();window.customElements.define(D.tag,D),e.CsvRender=D,Object.defineProperty(e,"__esModule",{value:!0})});
