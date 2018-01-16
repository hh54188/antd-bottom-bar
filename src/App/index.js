import React from 'react'

import './index.less'

import BottomBar from '../BottomBar'
import Reload from '../BottomBar/components/Reload'
import ToIndex from '../BottomBar/components/ToIndex'
import RedirectTo from '../BottomBar/components/RedirectTo'

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
        <BottomBar
          onOverlayClick={this.toggleHandler}
          onClose={this.toggleHandler}
          show={show}
        >
          {/* <Reload /> */}
          {/* <ToIndex /> */}
          <RedirectTo title="测试页面" href="/test" />
        </BottomBar>
      </div>
    )
  }
}

export default App
