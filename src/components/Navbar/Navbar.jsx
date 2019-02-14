import React, { Component } from 'react'
import './Navbar.css'
export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#"><i class="fas fa-bars"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <button className="btn btn-danger my-2 my-sm-0" type="submit">Archive</button>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <i className="fas fa-mobile-alt"></i>
            <i className="fas fa-arrow-right"></i>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar
