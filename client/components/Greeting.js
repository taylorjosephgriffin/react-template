import React, { Component } from 'react'

export default class Greeting extends Component {

  render() {
    return (
      <React.Fragment>
        <div style={this.props.style} className='text-center'>{ `Hello, welcome to my React template.` }</div>
      </React.Fragment>
    )
  }
}
