define(["./node_modules/@polymer/polymer/polymer-legacy.js","./lib/img-loader.js","openseadragon/openseadragon.min.js"],function(_polymerLegacy){"use strict";function _templateObject_6cb59af0db1411e89d042be223687eac(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: relative;\n        height: 500px;\n      }\n      #viewer{\n        position: relative;\n        height: 100%;\n        width: 100%;\n      }\n\n      paper-spinner-lite{\n        opacity: 0;\n        display: block;\n        transition: opacity 700ms;\n        position: absolute;\n        margin: auto;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        z-index: 1;\n        height: 70px;\n        width: 70px;\n        --paper-spinner-color: var(--img-pan-zoom-spinner-color, #2196F3);\n        --paper-spinner-stroke-width: var(--img-pan-zoom-spinner-width, 5px);\n        @apply(--img-pan-zoom-spinner);\n      }\n      paper-spinner-lite[active]{\n        opacity: 1;\n      }\n      [hidden]{\n        display: none;\n      }\n    </style>\n\n    <!-- Only preload regular images -->\n    <template is=\"dom-if\" if=\"[[!dzi]]\">\n      <paper-spinner-lite hidden$=\"[[hideSpinner]]\" active=\"[[loading]]\"></paper-spinner-lite>\n      <img-loader loaded=\"{{loaded}}\" loading=\"{{loading}}\" src=\"[[src]]\"></img-loader>\n    </template>\n\n    <!-- Openseadragon -->\n    <div id=\"viewer\"></div>\n"],["\n    <style>\n      :host {\n        display: block;\n        position: relative;\n        height: 500px;\n      }\n      #viewer{\n        position: relative;\n        height: 100%;\n        width: 100%;\n      }\n\n      paper-spinner-lite{\n        opacity: 0;\n        display: block;\n        transition: opacity 700ms;\n        position: absolute;\n        margin: auto;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        z-index: 1;\n        height: 70px;\n        width: 70px;\n        --paper-spinner-color: var(--img-pan-zoom-spinner-color, #2196F3);\n        --paper-spinner-stroke-width: var(--img-pan-zoom-spinner-width, 5px);\n        @apply(--img-pan-zoom-spinner);\n      }\n      paper-spinner-lite[active]{\n        opacity: 1;\n      }\n      [hidden]{\n        display: none;\n      }\n    </style>\n\n    <!-- Only preload regular images -->\n    <template is=\"dom-if\" if=\"[[!dzi]]\">\n      <paper-spinner-lite hidden\\$=\"[[hideSpinner]]\" active=\"[[loading]]\"></paper-spinner-lite>\n      <img-loader loaded=\"{{loaded}}\" loading=\"{{loading}}\" src=\"[[src]]\"></img-loader>\n    </template>\n\n    <!-- Openseadragon -->\n    <div id=\"viewer\"></div>\n"]);_templateObject_6cb59af0db1411e89d042be223687eac=function(){return data};return data}(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_6cb59af0db1411e89d042be223687eac()),is:"img-pan-zoom",properties:{src:{type:String},dzi:{type:Boolean,value:!1},fadeIn:{type:Boolean,value:!0},loading:{type:Boolean,readonly:!0,notify:!0},hideSpinner:{type:Boolean,value:!1},loaded:{type:Boolean,readonly:!0,notify:!0,observer:"_loadedChanged"},showNavigationControl:{type:Boolean,value:!1},showNavigator:{type:Boolean,value:!1},zoomPerClick:{type:Number,value:2},zoomPerScroll:{type:Number,value:1.2},animationTime:{type:Number,value:1.2},navPrevNextWrap:{type:Boolean,value:!1},showRotationControl:{type:Boolean,value:!1},minZoomImageRatio:{type:Number,value:1},maxZoomPixelRatio:{type:Number,value:1.1},constrainDuringPan:{type:Boolean,value:!1},visibilityRatio:{type:Number,value:1}},observers:["_srcChanged(src)"],ready:function ready(){this.animationConfig={fade:{name:"fade-in-animation",node:this.$.viewer}};if(this.dzi){this._initOpenSeadragon()}},_initOpenSeadragon:function _initOpenSeadragon(){var tileSources=this.src;if(!this.dzi){tileSources={type:"image",url:this.src,buildPyramid:!1}}this.viewer=OpenSeadragon({element:this.$.viewer,visibilityRatio:this.visibilityRatio,constrainDuringPan:this.constrainDuringPan,showNavigationControl:this.showNavigationControl,showNavigator:this.showNavigator,zoomPerClick:this.zoomPerClick,zoomPerScroll:this.zoomPerScroll,animationTime:this.animationTime,navPrevNextWrap:this.navPrevNextWrap,showRotationControl:this.showRotationControl,minZoomImageRatio:this.minZoomImageRatio,maxZoomPixelRatio:this.maxZoomPixelRatio,tileSources:tileSources});this.init=!0},destroy:function destroy(){this.viewer.destroy()},zoomIn:function zoomIn(){var currentZoom=this.viewer.viewport.getZoom(),maxZoom=this.viewer.viewport.getMaxZoom(),zoomTo=currentZoom+.7;if(zoomTo<maxZoom){this.viewer.viewport.zoomTo(zoomTo)}},zoomOut:function zoomOut(){var currentZoom=this.viewer.viewport.getZoom(),minZoom=this.viewer.viewport.getMinZoom(),zoomTo=currentZoom-.7;if(zoomTo>minZoom){this.viewer.viewport.zoomTo(zoomTo)}else{if(minZoom!=currentZoom){this.resetZoom()}}},resetZoom:function resetZoom(){this.viewer.viewport.goHome()},_srcChanged:function _srcChanged(){if(this.dzi&&this.init){this._addTiledImage()}},_loadedChanged:function _loadedChanged(){if(this.loaded){if(!this.init){this._initOpenSeadragon()}else{this._addImage()}}},_addImage:function _addImage(){this.viewer.addSimpleImage({url:this.src,index:0,replace:!0})},_addTiledImage:function _addTiledImage(){this.viewer.addTiledImage({tileSource:this.src,index:0,replace:!0})}})});