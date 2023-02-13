import React from 'react'
import 'bulma/css/bulma.css'

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <h1 className="title is-4">My App</h1>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#">
            Home
          </a>

          <a className="navbar-item" href="#">
            About
          </a>

          <a className="navbar-item" href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
