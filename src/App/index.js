import React from 'react'

import './index.less'

import BottomBar from '../BottomBar'
import ErrorBottomBar from '../BottomBar/components/ErrorBottomBar'
import LoadingBottomBar from '../BottomBar/components/LoadingBottomBar'
import ReloadBottomBar from '../BottomBar/components/ReloadBottomBar'
import ToIndexBottomBar from '../BottomBar/components/ToIndexBottomBar'
import RedirectToBottomBar from '../BottomBar/components/RedirectToBottomBar'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.toggleHandler = this.toggleHandler.bind(this)
  }
  toggleHandler() {
    this.setState({
      show: !this.state.show,
    })
  }
  render() {
    const {show} = this.state
    return (
      <div>
        <button onClick={this.toggleHandler}>Toggle</button>
        <LoadingBottomBar show={show} />
        {/* <ErrorBottomBar
          error="zhihu"
          show={show}
          onClose={this.toggleHandler}
        /> */}
        {/* <ReloadBottomBar show={show} onClose={this.toggleHandler} /> */}
        {/* <ToIndexBottomBar show={show} onClose={this.toggleHandler} /> */}
      </div>
    )
  }
}

export default App
