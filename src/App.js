import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Hello from './Hello'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      learnAbout: 'React'
    }
  }

  updateLearnAbout = () => {
    this.setState({learnAbout: 'Jest'})
  }

  render() {
    let learnAbout = this.state.learnAbout

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello id="hello-wrapper" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn {learnAbout}
          </a>
        </header>

        <button id='change-button' onClick={this.updateLearnAbout}>Change Learning Experience</button>
      </div>
    )
  }
}

export default App
