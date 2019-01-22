define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@polymer/iron-pages/iron-pages.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@lrnwebcomponents/haxcms-elements/lib/haxcms-theme-behavior.js","./lib/simple-blog-listing.js","./lib/simple-blog-header.js","./lib/simple-blog-footer.js","./lib/simple-blog-post.js"],function(_exports,_polymerLegacy,_schemaBehaviors,_simpleColors,_ironPages,_paperIconButton,_haxcmsThemeBehavior,_simpleBlogListing,_simpleBlogHeader,_simpleBlogFooter,_simpleBlogPost){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimpleBlog=void 0;function _templateObject_6e31ba501e1511e998b7598126df619e(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style is=\"custom-style\" include=\"simple-colors\">\n      :host {\n        display: block;\n        font-family: \"Roboto\", \"Noto\", sans-serif;\n        -webkit-font-smoothing: antialiased;\n        font-size: 14px;\n        margin: 0;\n        padding: 24px;\n        background-color: #fafafa;\n        font-family: Open Sans, MundoSans, helvetica neue, Arial, Helvetica,\n          sans-serif;\n        margin: 0;\n        padding: 0;\n        text-rendering: optimizeLegibility;\n        -webkit-font-smoothing: antialiased;\n        -moz-font-feature-settings: \"liga=1, dlig=1\";\n        -ms-font-feature-settings: \"liga\", \"dlig\";\n        -webkit-font-feature-settings: \"liga\", \"dlig\";\n        -o-font-feature-settings: \"liga\", \"dlig\";\n        font-feature-settings: \"liga\", \"dlig\";\n      }\n      #backbutton {\n        position: fixed;\n        top: 0px;\n        left: 0px;\n        padding: 2px;\n        width: 40px;\n        height: 40px;\n        margin: 8px;\n        z-index: 1000;\n        color: black;\n        background-color: rgba(250, 250, 250, 0.5);\n        opacity: 0.5;\n        border-radius: 50%;\n        transition: all 0.6s linear;\n      }\n      #backbutton:focus,\n      #backbutton:hover {\n        opacity: 1;\n        color: white;\n        background-color: var(--haxcms-color, black);\n      }\n      iron-pages,\n      iron-pages section {\n        width: 100vw;\n        height: 100vh;\n      }\n      #post {\n        transition: all 0.6s ease-in-out;\n        visibility: hidden;\n      }\n      :host([selected-page=\"0\"]) #post {\n        visibility: visible;\n        opacity: 0;\n        visibility: hidden;\n      }\n      :host([selected-page=\"1\"]) #post {\n        visibility: visible;\n        opacity: 1;\n      }\n    </style>\n    <iron-pages selected=\"[[selectedPage]]\">\n      <section>\n        <simple-blog-header manifest=\"[[manifest]]\"></simple-blog-header>\n        <simple-blog-listing\n          id=\"listing\"\n          items=\"[[manifest.items]]\"\n        ></simple-blog-listing>\n      </section>\n      <section>\n        <paper-icon-button\n          id=\"backbutton\"\n          icon=\"icons:arrow-back\"\n          on-tap=\"_resetActiveItem\"\n        ></paper-icon-button>\n        <paper-tooltip\n          for=\"backbutton\"\n          position=\"right\"\n          offset=\"14\"\n          animation-delay=\"100\"\n        >\n          Back to main site\n        </paper-tooltip>\n        <simple-blog-post\n          id=\"post\"\n          active-item=\"[[activeItem]]\"\n          edit-mode=\"[[editMode]]\"\n          ><slot></slot\n        ></simple-blog-post>\n        <simple-blog-footer\n          id=\"footer\"\n          manifest=\"[[manifest]]\"\n        ></simple-blog-footer>\n      </section>\n    </iron-pages>\n  "]);_templateObject_6e31ba501e1511e998b7598126df619e=function _templateObject_6e31ba501e1511e998b7598126df619e(){return data};return data}var SimpleBlog=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_6e31ba501e1511e998b7598126df619e()),is:"simple-blog",behaviors:[SchemaBehaviors.Schema,HAXCMSBehaviors.Theme],listeners:{"active-item-selected":"_itemSelected","active-item-reset":"_resetActiveItem"},properties:{selectedPage:{type:Number,reflectToAttribute:!0,value:0}},ready:function ready(){this.setupHAXTheme(!0,this.$.post.$.contentcontainer);document.body.addEventListener("haxcms-trigger-update",this._dataRefreshed.bind(this));document.body.addEventListener("json-outline-schema-active-item-changed",this._activeItemEvent.bind(this))},detached:function detached(){this.setupHAXTheme(!1);document.body.removeEventListener("haxcms-trigger-update",this._dataRefreshed.bind(this));document.body.removeEventListener("json-outline-schema-active-item-changed",this._activeItemEvent.bind(this))},_itemSelected:function _itemSelected(e){var id=e.detail,find=this.manifest.items.filter(function(item){if(item.id!==id){return!1}return!0});if(0<find.length){this.fire("json-outline-schema-active-item-changed",find.pop())}},_activeItemEvent:function _activeItemEvent(e){if(babelHelpers.typeof(e.detail.id)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){this.selectedPage=1;window.scrollTo(0,0);this.$.post.set("activeItem",e.detail)}else{this.selectedPage=0}},_resetActiveItem:function _resetActiveItem(e){this.fire("json-outline-schema-active-item-changed",{})},_dataRefreshed:function _dataRefreshed(e){this.fire("json-outline-schema-active-item-changed",{})}});_exports.SimpleBlog=SimpleBlog});