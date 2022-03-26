import React, { Component } from 'react'
import From from '../components/Button'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header';

class App extends Component {// component stateful
  render() {
    return (
      <div>
        <Header />
        <From />
      </div>
    )
  }
}

export default App


