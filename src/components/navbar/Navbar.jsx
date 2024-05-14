function toggleDropdown() {
  const myNav = document.querySelector("#navbarBasicExample")
  const burger = document.querySelector("#burger")
  myNav.classList.toggle("is-active")
  burger.classList.toggle("is-active")
}

import './navbar.css'

export default function Navbar() {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      id='my-nav'
    >
      <div className="container">

        <div className="navbar-brand">
          <a className="navbar-item" href="" id='navbar-title'>
            Billy's Portfolio
          </a>

          <a
            role="button"
            className="navbar-burger"
            id="burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleDropdown}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu" id="navbarBasicExample">
          <div className="navbar-end">
            <a className="navbar-item" href='#landing'>Home</a>
            <a className="navbar-item" href='#about'>About</a>
            <a className="navbar-item" href='#project-page'>Projects</a>
            <a className="navbar-item" href='#contact'>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}