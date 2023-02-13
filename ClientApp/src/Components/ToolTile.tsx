import React from 'react'
import mitersaw from '../images/dewalt_miter_saw.jpeg'
import 'bulma/css/bulma.css'

function ToolTile() {
  return (
    <div className="columns">
      <div className="column">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={mitersaw} alt="Tool Image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Tool Name</p>
                <p className="subtitle is-6">$Price/day</p>
              </div>
            </div>

            <div className="content">Tool description goes here...</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolTile
