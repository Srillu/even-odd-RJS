// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const number = Math.ceil(Math.random() * 99)
    this.setState(prevstate => ({count: prevstate.count + number}))
  }

  renderName() {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>Count {count}</h1>
        <div className="btn-container">
          <p>Count is {this.renderName()}</p>
          <button className="button" onClick={this.onIncrement} type="button">
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
