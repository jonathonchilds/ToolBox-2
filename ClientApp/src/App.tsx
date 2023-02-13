import React from 'react'
import MainContent from './Components/MainContent'
import LeftMenu from './Components/LeftMenu'
import Navbar from './Components/Navbar'

const App: React.FC = () => {
  return (
    <div className="columns is-gapless">
      <div className="column is-2">
        <LeftMenu />
      </div>
      <div className="column">
        <Navbar />
        <MainContent />
      </div>
    </div>
  )
}

export default App
