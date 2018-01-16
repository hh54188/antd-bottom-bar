import React from 'react'
import {Icon} from 'antd'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import 'antd/dist/antd.css'

import './styles/basic-animation.less'
import './styles/react-group-animation.less'
import './styles/index.less'

import {DEFAULT_FUNCTION} from './constant'

class BottomBar extends React.Component {
  constructor(props) {
    super(props)
    this.overlayClickHandler = this.overlayClickHandler.bind(this)
    this.closeClickHandler = this.closeClickHandler.bind(this)
  }
  overlayClickHandler() {
    const {onOverlayClick = DEFAULT_FUNCTION} = this.props
    onOverlayClick()
  }
  closeClickHandler() {
    const {onClose = DEFAULT_FUNCTION} = this.props
    onClose()
  }
  render() {
    const {show, children} = this.props
    return (
      <div className="BottomBar BottomBar__contaienr">
        <ReactCSSTransitionGroup
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionName="BottomBar__overlay--animation"
        >
          {show && (
            <div
              onClick={this.overlayClickHandler}
              className="BottomBar__overlay"
            />
          )}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionName="BottomBar__bar--animation"
        >
          {show && (
            <div className="BottomBar__bar">
              <Icon
                onClick={this.closeClickHandler}
                className="BottomBar__bar__closeBtn"
                type="close"
              />
              {children}
            </div>
          )}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default BottomBar
