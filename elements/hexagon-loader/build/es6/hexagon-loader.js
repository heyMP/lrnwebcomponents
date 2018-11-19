import {
  html,
  PolymerElement
} from "./node_modules/@polymer/polymer/polymer-element.js";
export { HexagonLoader };
class HexagonLoader extends PolymerElement {
  static get template() {
    return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}

div {
  position: relative;
  width: 255px;
  height: 232.5px;
  margin: 0 auto;
}

hex-a-gon:nth-of-type(1) {
  display: block;
  margin-left: -56.25px;
  margin-top: -97.875px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}
hex-a-gon:nth-of-type(2) {
  display: block;
  margin-left: -18.75px;
  margin-top: -97.875px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.05s;
          animation-delay: 0.05s;
}
hex-a-gon:nth-of-type(3) {
  display: block;
  margin-left: 18.75px;
  margin-top: -97.875px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
hex-a-gon:nth-of-type(4) {
  display: block;
  margin-left: 56.25px;
  margin-top: -97.875px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.15s;
          animation-delay: 0.15s;
}
hex-a-gon:nth-of-type(5) {
  display: block;
  margin-left: -75px;
  margin-top: -65.25px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}
hex-a-gon:nth-of-type(6) {
  display: block;
  margin-left: -37.5px;
  margin-top: -65.25px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.05s;
          animation-delay: 0.05s;
}
hex-a-gon:nth-of-type(7) {
  display: block;
  margin-left: 0px;
  margin-top: -65.25px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
hex-a-gon:nth-of-type(8) {
  display: block;
  margin-left: 37.5px;
  margin-top: -65.25px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.15s;
          animation-delay: 0.15s;
}
hex-a-gon:nth-of-type(9) {
  display: block;
  margin-left: 75px;
  margin-top: -65.25px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
hex-a-gon:nth-of-type(10) {
  display: block;
  margin-left: -93.75px;
  margin-top: -32.625px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}
hex-a-gon:nth-of-type(11) {
  display: block;
  margin-left: -56.25px;
  margin-top: -32.625px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.05s;
          animation-delay: 0.05s;
}
hex-a-gon:nth-of-type(12) {
  display: block;
  margin-left: -18.75px;
  margin-top: -32.625px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
hex-a-gon:nth-of-type(13) {
  display: block;
  margin-left: 18.75px;
  margin-top: -32.625px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.15s;
          animation-delay: 0.15s;
}
hex-a-gon:nth-of-type(14) {
  display: block;
  margin-left: 56.25px;
  margin-top: -32.625px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
hex-a-gon:nth-of-type(15) {
  display: block;
  margin-left: 93.75px;
  margin-top: -32.625px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.25s;
          animation-delay: 0.25s;
}
hex-a-gon:nth-of-type(16) {
  display: block;
  margin-left: -112.5px;
  margin-top: 0px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}
hex-a-gon:nth-of-type(17) {
  display: block;
  margin-left: -75px;
  margin-top: 0px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.05s;
          animation-delay: 0.05s;
}
hex-a-gon:nth-of-type(18) {
  display: block;
  margin-left: -37.5px;
  margin-top: 0px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
hex-a-gon:nth-of-type(19) {
  display: block;
  margin-left: 0px;
  margin-top: 0px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.15s;
          animation-delay: 0.15s;
}
hex-a-gon:nth-of-type(20) {
  display: block;
  margin-left: 37.5px;
  margin-top: 0px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
hex-a-gon:nth-of-type(21) {
  display: block;
  margin-left: 75px;
  margin-top: 0px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.25s;
          animation-delay: 0.25s;
}
hex-a-gon:nth-of-type(22) {
  display: block;
  margin-left: 112.5px;
  margin-top: 0px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
hex-a-gon:nth-of-type(23) {
  display: block;
  margin-left: -93.75px;
  margin-top: 32.625px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}
hex-a-gon:nth-of-type(24) {
  display: block;
  margin-left: -56.25px;
  margin-top: 32.625px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.05s;
          animation-delay: 0.05s;
}
hex-a-gon:nth-of-type(25) {
  display: block;
  margin-left: -18.75px;
  margin-top: 32.625px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
hex-a-gon:nth-of-type(26) {
  display: block;
  margin-left: 18.75px;
  margin-top: 32.625px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.15s;
          animation-delay: 0.15s;
}
hex-a-gon:nth-of-type(27) {
  display: block;
  margin-left: 56.25px;
  margin-top: 32.625px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
hex-a-gon:nth-of-type(28) {
  display: block;
  margin-left: 93.75px;
  margin-top: 32.625px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.25s;
          animation-delay: 0.25s;
}
hex-a-gon:nth-of-type(29) {
  display: block;
  margin-left: -75px;
  margin-top: 65.25px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}
hex-a-gon:nth-of-type(30) {
  display: block;
  margin-left: -37.5px;
  margin-top: 65.25px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.05s;
          animation-delay: 0.05s;
}
hex-a-gon:nth-of-type(31) {
  display: block;
  margin-left: 0px;
  margin-top: 65.25px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
hex-a-gon:nth-of-type(32) {
  display: block;
  margin-left: 37.5px;
  margin-top: 65.25px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.15s;
          animation-delay: 0.15s;
}
hex-a-gon:nth-of-type(33) {
  display: block;
  margin-left: 75px;
  margin-top: 65.25px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
hex-a-gon:nth-of-type(34) {
  display: block;
  margin-left: -56.25px;
  margin-top: 97.875px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}
hex-a-gon:nth-of-type(35) {
  display: block;
  margin-left: -18.75px;
  margin-top: 97.875px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.05s;
          animation-delay: 0.05s;
}
hex-a-gon:nth-of-type(36) {
  display: block;
  margin-left: 18.75px;
  margin-top: 97.875px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
hex-a-gon:nth-of-type(37) {
  display: block;
  margin-left: 56.25px;
  margin-top: 97.875px;
  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;
          animation: scaleIt 1.5s ease-in-out infinite both;
  -webkit-animation-delay: 0.15s;
          animation-delay: 0.15s;
}

@-webkit-keyframes scaleIt {
  25%,100% {
    -webkit-transform: scale(1) translate(-50%, -50%);
            transform: scale(1) translate(-50%, -50%);
  }
  50% {
    -webkit-transform: scale(0) translate(-50%, -50%);
            transform: scale(0) translate(-50%, -50%);
  }
}

@keyframes scaleIt {
  25%,100% {
    -webkit-transform: scale(1) translate(-50%, -50%);
            transform: scale(1) translate(-50%, -50%);
  }
  50% {
    -webkit-transform: scale(0) translate(-50%, -50%);
            transform: scale(0) translate(-50%, -50%);
  }
}</style>
<div>
    <template is="dom-repeat" items="[[items]]">
        <hex-a-gon color="[[color]]"></hex-a-gon>
    </template>
</div>`;
  }
  static get properties() {
    return {
      color: { name: "color", type: "String", value: "orange" },
      size: { name: "size", type: "String", value: "medium" },
      loading: { name: "loading", type: "Boolean" },
      itemCount: { name: "itemCount", type: "Number", value: 92 }
    };
  }
  static get tag() {
    return "hexagon-loader";
  }
  connectedCallback() {
    super.connectedCallback();
  }
}
window.customElements.define(HexagonLoader.tag, HexagonLoader);