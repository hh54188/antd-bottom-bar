import React from 'react'

/**
 * https://w33ble.github.io/understanding-react/demos/countdown.html
 * https://codepen.io/ghostffcode/pen/pbBYkq
 */

class CountDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsRemaining: this.props.seconds || 3,
    }
    this.tick = this.tick.bind(this)
  }
  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1})
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval)
      const {callback} = this.props
      if (callback) {
        callback()
      }
    }
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <a className={this.props.className} href="javascript:void(0)">
        {this.state.secondsRemaining}
      </a>
    )
  }
}

export default CountDown
