import React from 'react'
import './App.scss'
import Homeview from './Views/Homeview/Homeview'
import Topbar from './Components/Topbar/Topbar'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Homeview />
    </div>
  )
}

export default App
