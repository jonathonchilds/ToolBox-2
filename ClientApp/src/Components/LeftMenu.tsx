import React, { useState } from 'react'
import 'bulma/css/bulma.css'

const SearchInput = () => {
  const [query, setQuery] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Perform search action with the query value
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Find a tool"
            value={query}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <button className="button is-info">Search</button>
        </div>
      </div>
    </form>
  )
}

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
          <SearchInput />
        </li>
        <br></br>
        <li>
          <SearchInput />
        </li>
        <br></br>
        <li>
          <SearchInput />
        </li>
      </ul>
    </aside>
  )
}

export default LeftMenu
