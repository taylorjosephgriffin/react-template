import React, { Component, Fragment } from 'react'
import Greeting from './components/Greeting.js'

const greetingStyle = {
  fontSize: '50px',
  fontStyle: 'italic',
  margin: '35vh 20px 0 20px'
}

const pathStyle = {
  backgroundColor: '#eaeaea',
  fontStyle: 'italic',
  color: '#ff4f4f'
}

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Greeting style={greetingStyle} />
        <div className='text-center' style={{ margin: '0 20px 0 20px' }}>
          Change the Greeting component in&nbsp;
            <span style={pathStyle}>react-template/components/Greeting.js</span>
          &nbsp;to see react do its thing.</div>
      </Fragment>
    )
  }
}
