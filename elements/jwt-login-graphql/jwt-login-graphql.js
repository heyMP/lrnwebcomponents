import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@polymer/iron-ajax/iron-ajax.js";

// helper to use strings for index in Objects
Object.byString = function(o, s) {
  s = s.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
  s = s.replace(/^\./, ""); // strip a leading dot
  var a = s.split(".");
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};

/**
`jwt-login`
a simple element to check for and fetch JWTs

* @demo demo/index.html

@microcopy - the mental model for this element
- jwt - a json web token which is an encrypted security token to talk

*/
let JwtLoginGraphql = Polymer({
  _template: html`
    <style>
      :host {
        visibility: hidden;
      }
    </style>
    <iron-ajax
      id="loginrequest"
      method="POST"
      headers="[[_headers]]"
      body="[[query]]"
      url="[[url]]"
      handle-as="json"
      on-response="loginResponse"
      auto
    >
    </iron-ajax>
  `,

  is: "jwt-login-graphql",

  properties: {
    /**
     * url
     */
    url: {
      type: String
    },
    /**
     * query
     * @example
     * JSON.stringify({ query: "{ login }"})
     */
    query: {
      type: String
    },
    /**
     * queryPath
     *
     * The path in the response data where the jwt can be found
     * @example
     * "data.login"
     */
    queryPath: {
      type: String
    },
    /**
     * type
     * @type String graphql,rest
     * @default rest
    /**
     * Key that contains the token in local storage
     */
    key: {
      type: String,
      value: "jwt"
    },
    /**
     * JSON Web token to securely pass around
     */
    jwt: {
      type: String,
      notify: true
    },
    _headers: {
      type: Object,
      value: () => ({
        "Content-Type": "application/json"
      })
    }
  },

  /**
   * Ready life cycle
   */
  ready: function() {
    // set jwt from local storage bin
    this.jwt = localStorage.getItem(this.key);
    this.fire("jwt-token", this.jwt);
  },

  /**
   * Request a user login if we need one or log out
   */
  toggleLogin: function() {
    // null is default, if we don't have anything go get one
    if (this.jwt == null) {
      this.$.loginrequest.generateRequest();
    } else {
      localStorage.removeItem(this.key);
      this.jwt = null;
      this.fire("jwt-logged-in", false);
    }
  },

  /**
   * Login bridge to get a JWT and hang onto it
   */
  loginResponse: function(e) {
    this.jwt = Object.assign(e.detail.response, `.data.${this.queryPath}`);
    console.log("jwt:", this.jwt);
    if (this.jwt == null || this.jwt == "") {
      this.fire("jwt-logged-in", false);
    } else {
      // set the jwt into local storage so we can reference later
      localStorage.setItem(this.key, this.jwt);
      this.fire("jwt-token", this.jwt);
      this.fire("jwt-logged-in", true);
    }
  }
});
export { JwtLoginGraphql };
