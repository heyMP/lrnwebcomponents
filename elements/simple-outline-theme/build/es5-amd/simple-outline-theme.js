define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.SimpleOutlineTheme = void 0;
  function _templateObject_59e20380d70611e8b7139f924c9202b5() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_59e20380d70611e8b7139f924c9202b5 = function() {
      return data;
    };
    return data;
  }
  var SimpleOutlineTheme = (function(_PolymerElement) {
    babelHelpers.inherits(SimpleOutlineTheme, _PolymerElement);
    function SimpleOutlineTheme() {
      babelHelpers.classCallCheck(this, SimpleOutlineTheme);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          SimpleOutlineTheme.__proto__ ||
          Object.getPrototypeOf(SimpleOutlineTheme)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      SimpleOutlineTheme,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                SimpleOutlineTheme.prototype.__proto__ ||
                  Object.getPrototypeOf(SimpleOutlineTheme.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              SimpleOutlineTheme.haxProperties,
              SimpleOutlineTheme.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_59e20380d70611e8b7139f924c9202b5()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Simple outline-theme",
                description: "Automated conversion of simple-outline-theme/",
                icon: "icons:android",
                color: "green",
                groups: ["Outline"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "simple-outline-theme";
          }
        }
      ]
    );
    return SimpleOutlineTheme;
  })(_polymerElement.PolymerElement);
  _exports.SimpleOutlineTheme = SimpleOutlineTheme;
  window.customElements.define(SimpleOutlineTheme.tag, SimpleOutlineTheme);
});
