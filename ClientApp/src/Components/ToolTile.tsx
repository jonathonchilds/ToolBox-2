import React from 'react'

type ToolProps = {
  id: number
  name: string
  description: string
  price: number
  owner: string
  imageUrl: string
}

const ToolTile: React.FC<ToolProps> = (tool) => {
  return (
    <div className="card">
      <img className="card-img-top" src={tool.imageUrl} alt={tool.name} />
      <div className="card-body">
        <h5 className="card-title">{tool.name}</h5>
        <p className="card-text">{tool.description}</p>
        <p className="card-text">
          Price: ${tool.price}
          <br />
          Owner: {tool.owner}
        </p>
        <a href="#" className="btn btn-primary">
          Rent
        </a>
      </div>
    </div>
  )
}

type ToolListProps = {
  tools: Array<{
    id: number
    name: string
    description: string
    price: number
    owner: string
    imageUrl: string
  }>
}

const ToolList: React.FC<ToolListProps> = ({ tools }) => {
  return (
    <div className="container">
      <div className="row">
        {tools.map((tool) => (
          <div className="col-md-4" key={tool.id}>
            <ToolTile {...tool} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToolList
