/**
 * Copyright 2019 PSU
 * @license Apache-2.0, see License.md for full text.
 */import{LitElement,html}from"./node_modules/@polymer/lit-element/lit-element.js";import{HAXWiring}from"./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";export{FigureLabel};/**
 * `figure-label`
 * `Figure label element to mark media assets within content.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */class FigureLabel extends LitElement{// render function
render(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}

#wrap {
  display: flex;
  margin-bottom: 1em;
}

#title {
  background-color: #f2f2f2;
  padding: 10.8px 13.5px 10.8px;
  font-size: 13.5px;
}

#description {
  border: solid 1px #f2f2f2;
  padding: 10.8px 13.5px 10.8px;
  font-size: 13.5px;
}</style>
<div id="wrap">
  <div id="title">${this.title}</div>
  <div id="description">${this.description}</div>
</div>`}// haxProperty definition
static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Figure label",description:"Figure label element to mark media assets within content.",icon:"icons:android",color:"green",groups:["Label"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"heymp",owner:"PSU"}},settings:{quick:[],configure:[{property:"title",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"description",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}// properties available to the custom element for data binding
static get properties(){return{title:{name:"title",type:"String",value:"",reflectToAttribute:!1,observer:!1},description:{name:"description",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */tag(){return"figure-label"}// life cycle
constructor(){super()}/**
   * life cycle, element is afixed to the DOM
   */connectedCallback(){super.connectedCallback();this.HAXWiring=new HAXWiring;this.HAXWiring.setup(FigureLabel.haxProperties,FigureLabel.tag,this)}// static get observedAttributes() {
//   return [];
// }
// disconnectedCallback() {}
// attributeChangedCallback(attr, oldValue, newValue) {}
}customElements.define("figure-label",FigureLabel);