import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <HashLink className="navbar-brand page-scroll" to="/#page-top">
  3D RECONSTRUCTION TOOL
</HashLink>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
              <HashLink to="/#page-top" className="page-scroll">
                  Home
              </HashLink>
              </li>
              <li>
              <HashLink to="/#about" className="page-scroll">
                  about
              </HashLink>
              </li>
              <li>
              <HashLink to="/#modeling" className="page-scroll">
                  Modeling
                </HashLink>
              </li>
              <li>
              <HashLink to="/#resources" className="page-scroll">
                Resources
              </HashLink>
              </li>
              <li>
              <HashLink to="/#team" className="page-scroll">
                  Team
                </HashLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
