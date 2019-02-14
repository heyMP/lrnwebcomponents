define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/hax-body/lib/hax-store.js","./node_modules/@lrnwebcomponents/hax-body/hax-body.js","./node_modules/@lrnwebcomponents/hax-body/lib/hax-autoloader.js","./node_modules/@lrnwebcomponents/hax-body/lib/hax-manager.js","./node_modules/@lrnwebcomponents/hax-body/lib/hax-panel.js","./node_modules/@lrnwebcomponents/hax-body/lib/hax-app-picker.js","./node_modules/@lrnwebcomponents/hax-body/lib/hax-export-dialog.js"],function(_exports,_polymerLegacy,_haxStore,_haxBody,_haxAutoloader,_haxManager,_haxPanel,_haxAppPicker,_haxExportDialog){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.AppEditorHax=void 0;function _templateObject_75ddb8102fe211e9a8fe8dccffc98a49(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        font-size: 16px;\n        box-sizing: content-box;\n      }\n    </style>\n    <hax-store\n      skip-exit-trap=\"\"\n      hidden=\"\"\n      app-store=\"[[appStoreConnection]]\"\n    ></hax-store>\n    <hax-autoloader hidden=\"\"></hax-autoloader>\n    <hax-panel\n      id=\"panel\"\n      hide-panel-ops=\"\"\n      hide-export-button=\"\"\n      hide-preferences-button$=\"[[hidePreferencesButton]]\"\n      align=\"right\"\n    ></hax-panel>\n    <hax-body id=\"body\"></hax-body>\n    <hax-manager></hax-manager>\n    <hax-export-dialog></hax-export-dialog>\n    <hax-app-picker></hax-app-picker>\n  "],["\n    <style>\n      :host {\n        display: block;\n        font-size: 16px;\n        box-sizing: content-box;\n      }\n    </style>\n    <hax-store\n      skip-exit-trap=\"\"\n      hidden=\"\"\n      app-store=\"[[appStoreConnection]]\"\n    ></hax-store>\n    <hax-autoloader hidden=\"\"></hax-autoloader>\n    <hax-panel\n      id=\"panel\"\n      hide-panel-ops=\"\"\n      hide-export-button=\"\"\n      hide-preferences-button\\$=\"[[hidePreferencesButton]]\"\n      align=\"right\"\n    ></hax-panel>\n    <hax-body id=\"body\"></hax-body>\n    <hax-manager></hax-manager>\n    <hax-export-dialog></hax-export-dialog>\n    <hax-app-picker></hax-app-picker>\n  "]);_templateObject_75ddb8102fe211e9a8fe8dccffc98a49=function _templateObject_75ddb8102fe211e9a8fe8dccffc98a49(){return data};return data}var AppEditorHax=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_75ddb8102fe211e9a8fe8dccffc98a49()),is:"app-editor-hax",properties:{appStoreConnection:{type:Object},hidePreferencesButton:{value:!1,type:Boolean}},save:function save(){var content=window.HaxStore.instance.activeHaxBody.haxToContent();this.fire("app-editor-hax-save",content)},import:function _import(html){window.HaxStore.instance.activeHaxBody.importContent(html);this.fire("app-editor-hax-import",!0)}});_exports.AppEditorHax=AppEditorHax});