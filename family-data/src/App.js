import React, { Component } from 'react'
import Family from './Family'
import { MyProvider } from './MyContext'
import './App.css'

class App extends Component {
  render () {
    return (
      <MyProvider>
        <div className='App'>
          <Family />
        </div>
      </MyProvider>
    )
  }
}

export default App
