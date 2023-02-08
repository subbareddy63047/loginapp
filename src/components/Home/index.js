// Write your code here

import {Component} from 'react'

import Message from '.components/Message'

import Login from '.components/Login'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="Home-container">
        <div className="card-container">
          <Message />
          <Login />
        </div>
      </div>
    )
  }
}

export default Home
