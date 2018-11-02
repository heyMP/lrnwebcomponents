define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-card/paper-card.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_f591a0a0dbb711e8915511327dd2bb7c() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style include="materializecss-styles-colors">\n      :host {\n        display: block;\n      }\n      paper-card {\n        -webkit-perspective: 800;\n        width: 400px;\n        height: 300px;\n        position: relative;\n        padding: 0;\n        margin: 0;\n      }\n      paper-card.flipped {\n        -webkit-transform: rotatex(-180deg);\n      }\n      paper-card.flipped .back {\n        z-index: 3;\n      }\n      paper-card {\n        -webkit-transform-style: preserve-3d;\n        -webkit-transition: 0.5s;\n      }\n      paper-card .face {\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        cursor: pointer;\n        position: absolute;\n        -webkit-backface-visibility: hidden ;\n        z-index: 2;\n        font-family: Georgia;\n        font-size: 3em;\n        text-align: center;\n        line-height: 200px;\n      }\n      paper-card .front {\n        position: absolute;\n        z-index: 1;\n      }\n      paper-card .back {\n        -webkit-transform: rotatex(-180deg);\n      }\n    </style>\n    <paper-card id="card" animated-shadow="true">\n      <div class="face front white black-text">\n        Front\n      </div>\n      <div class="face back black white-text">\n          Back\n      </div>\n    </paper-card>\n'
    ]);
    _templateObject_f591a0a0dbb711e8915511327dd2bb7c = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_f591a0a0dbb711e8915511327dd2bb7c()
    ),
    is: "flash-card",
    behaviors: [
      HAXBehaviors.PropertiesBehaviors,
      MaterializeCSSBehaviors.ColorBehaviors,
      SchemaBehaviors.Schema
    ],
    listeners: { mouseenter: "_flipup", mouseleave: "_flipback" },
    properties: { title: { type: String } },
    attached: function attached() {
      this.setHaxProperties({
        canScale: !0,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Sample gizmo",
          description:
            "The user will be able to see this for selection in a UI.",
          icon: "av:play-circle-filled",
          color: "grey",
          groups: ["Video", "Media"],
          handles: [{ type: "video", url: "source" }],
          meta: { author: "Your organization on github" }
        },
        settings: {
          quick: [
            {
              property: "title",
              title: "Title",
              description: "The title of the element",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          configure: [
            {
              property: "title",
              title: "Title",
              description: "The title of the element",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          advanced: []
        }
      });
    },
    _flipup: function _flipup() {
      this.$.card.classList.add("flipped");
    },
    _flipback: function _flipback() {
      this.$.card.classList.remove("flipped");
    }
  });
});