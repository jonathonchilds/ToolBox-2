import React from 'react'
import 'bulma/css/bulma.css'

const LeftMenu: React.FC = () => {
  return (
    <aside className="menu">
      <p className="menu-label">User Options</p>
      <ul className="menu-list">
        <li>
          <a href="#">Sign In</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
      </ul>
      <p className="menu-label">Search Filter</p>
      <ul className="menu-list">
        <li>
          <a href="#">Search by Location</a>
        </li>
        <li>
          <a href="#">Search by Tool</a>
        </li>
        <li>
          <a href="#">Search by Rent or Purchase</a>
        </li>
      </ul>
    </aside>
  )
}

export default LeftMenu
