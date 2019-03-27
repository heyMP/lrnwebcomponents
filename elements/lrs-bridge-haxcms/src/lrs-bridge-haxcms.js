/**
 * Copyright 2019 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { autorun } from "mobx";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/haxcms-site-store.js";
import { LrsBridge } from "@lrnwebcomponents/lrs-bridge/lrs-bridge.js";

export { LrsBridgeHaxcms };
/**
 * `lrs-bridge-haxcms`
 * `Adds HAXcms event listeners for our LRS.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LrsBridgeHaxcms extends LrsBridge {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "lrs-bridge-haxcms";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    this._disposer = [];
    autorun(reaction => {
      this._locationChanged(store.location);
      this._disposer.push(reaction);
    });
  }
  /**
   * life cycle, element is removed from the DOM
   */
  disconnectedCallback() {
    this._disposer.forEach(d => {
      d.dispose();
    });
  }

  _locationChanged(location) {
    // trim slash from begining and end
    const trimSlash = string => string.replace(/(^\/|\/$)/, "");
    const url = `${trimSlash(location.baseUrl)}/${trimSlash(
      location.pathname
    )}`;
    this.recordStatement({
      verb: {
        id: "viewed"
      },
      object: {
        id: url
      }
    });
  }
}
window.customElements.define(LrsBridgeHaxcms.tag, LrsBridgeHaxcms);

fetch("http://localhost/4000", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify({
    query: `
      createStatement(data: JSON.stringify({
        actor: {
          id: "mgp140"
        },
        verb: {
          id: "fetched_mutation"
        },
        object: {
          id: "browser_fetch_mutation"
        }
      }))
		`
  })
})
  .then(r => r.json())
  .then(data => console.log("data returned:", data));
