define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnsysProgress = void 0;
  function _templateObject_d51a3f90d6fc11e8bc2285ec4b1d1df2() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_d51a3f90d6fc11e8bc2285ec4b1d1df2 = function() {
      return data;
    };
    return data;
  }
  var LrnsysProgress = (function(_PolymerElement) {
    babelHelpers.inherits(LrnsysProgress, _PolymerElement);
    function LrnsysProgress() {
      babelHelpers.classCallCheck(this, LrnsysProgress);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          LrnsysProgress.__proto__ || Object.getPrototypeOf(LrnsysProgress)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LrnsysProgress,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrnsysProgress.prototype.__proto__ ||
                  Object.getPrototypeOf(LrnsysProgress.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrnsysProgress.haxProperties,
              LrnsysProgress.tag,
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
              _templateObject_d51a3f90d6fc11e8bc2285ec4b1d1df2()
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
                title: "Lrnsys progress",
                description: "Automated conversion of lrnsys-progress/",
                icon: "icons:android",
                color: "green",
                groups: ["Progress"],
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
            return "lrnsys-progress";
          }
        }
      ]
    );
    return LrnsysProgress;
  })(_polymerElement.PolymerElement);
  _exports.LrnsysProgress = LrnsysProgress;
  window.customElements.define(LrnsysProgress.tag, LrnsysProgress);
});
