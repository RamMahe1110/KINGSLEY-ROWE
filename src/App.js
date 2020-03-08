import React from 'react'
import './App.scss'
import Homeview from './Views/Homeview/Homeview'
import Topbar from './Components/Topbar/Topbar'
import Bottomnav from './Components/Bottomnav/Bottomnav'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Homeview />
      <Bottomnav />
    </div>
  )
}

export default App
