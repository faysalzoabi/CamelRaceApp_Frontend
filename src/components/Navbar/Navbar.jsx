import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        <i className="fas fa-bars" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <button
              className="btn btn-danger my-2 my-sm-0 btncustom"
              type="submit"
            >
              Archive
            </button>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <i className="fas fa-mobile-alt" />
          <i className="fas fa-arrow-right" />
        </form>
      </div>
    </nav>
  );
}


