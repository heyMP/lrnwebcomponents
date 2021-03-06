import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-card/paper-card.js";
import "@lrnwebcomponents/materializecss-styles/materializecss-styles.js";
import "./lrnapp-block-recent-project.js";
import "./lrnapp-block-recent-submissions.js";
import "./lrnapp-block-recent-comments.js";
import "./lrnapp-block-need-feedback.js";
class LrnappStudioDashboard extends PolymerElement {
  static get template() {
    return html`
      <style include="materializecss-styles">
        :host {
          display: block;
          padding: 0 2em;
        }
        h1.title {
          font-size: 2em;
          color: black;
          margin: 0;
          padding: 0.5em 0 0 0;
          text-transform: none;
          text-align: left;
        }
        p.para {
          margin: 0;
          padding: 0.25em 0.5em;
        }
        .dashboard-row {
          width: 100%;
          display: inline-flex;
        }
        .dashboard-item {
          width: 30%;
        }
      </style>
      <h1 class="title">Welcome back [[username]]!</h1>
      <p class="para">Here's what's been going on in the studio</p>
      <div class="dashboard-row">
        <paper-card heading="Your active project" class="dashboard-item">
          <div class="card-content">
            <lrnapp-block-recent-project
              csrf-token="[[csrfToken]]"
              end-point="[[_getEndPoint(basePath)]]"
              base-path="[[basePath]]"
              source-path="[[_getDataSource(csrfToken, basePath,'recent-project')]]"
            >
            </lrnapp-block-recent-project>
          </div>
        </paper-card>
        <paper-card
          heading="Classmates needing feedback"
          class="dashboard-item"
        >
          <div class="card-content">
            <lrnapp-block-need-feedback
              csrf-token="[[csrfToken]]"
              end-point="[[_getEndPoint(basePath)]]"
              base-path="[[basePath]]"
              source-path="[[_getDataSource(csrfToken, basePath,'need-feedback')]]"
            >
            </lrnapp-block-need-feedback>
          </div>
        </paper-card>
        <paper-card heading="Recent Studio submissions" class="dashboard-item">
          <div class="card-content">
            <lrnapp-block-recent-submissions
              csrf-token="[[csrfToken]]"
              end-point="[[_getEndPoint(basePath)]]"
              base-path="[[basePath]]"
              source-path="[[_getDataSource(csrfToken, basePath,'recent-submissions')]]"
            >
            </lrnapp-block-recent-submissions>
          </div>
        </paper-card>
        <paper-card heading="Recent Studio comments" class="dashboard-item">
          <div class="card-content">
            <lrnapp-block-recent-comments
              csrf-token="[[csrfToken]]"
              end-point="[[_getEndPoint(basePath)]]"
              base-path="[[basePath]]"
              source-path="[[_getDataSource(csrfToken, basePath,'recent-comments')]]"
            >
            </lrnapp-block-recent-comments>
          </div>
        </paper-card>
      </div>
    `;
  }
  static get tag() {
    return "lrnapp-studio-dashboard";
  }
  static get properties() {
    return {
      elmslnCourse: {
        type: String
      },
      elmslnSection: {
        type: String
      },
      basePath: {
        type: String
      },
      csrfToken: {
        type: String
      },
      endPoint: {
        type: String
      },
      username: {
        type: String,
        reflectToAttribute: true
      },
      basePath: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      csrfToken: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      sourcePath: {
        type: String,
        notify: true,
        reflectToAttribute: true
      }
    };
  }
  _getEndPoint(basePath) {
    return basePath + "lrnapp-studio-dashboard/blocks";
  }
  _getDataSource(csrfToken, basePath, dataPoint) {
    return (
      basePath +
      "lrnapp-studio-dashboard/blocks/" +
      dataPoint +
      "?token=" +
      csrfToken
    );
  }
  /**
   * Simple way to convert from object to array.
   */
  _toArray(obj) {
    if (obj == null) {
      return [];
    }
    return Object.keys(obj).map(function(key) {
      return obj[key];
    });
  }
}
window.customElements.define(LrnappStudioDashboard.tag, LrnappStudioDashboard);
export { LrnappStudioDashboard };
