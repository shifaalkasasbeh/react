import React, { Component } from 'react'
import UserContext from './UserContext'

export default class HomePage extends Component {
  static contextType = UserContext

  change=()=> {
    const color = this.context
      document.body.style.backgroundColor = color;
  }

  render() {
    return <div>
        <button onClick={this.change}>change color back ground </button>
        

    </div>
  }
}


