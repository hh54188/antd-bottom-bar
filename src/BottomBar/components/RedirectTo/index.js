import React from 'react'
import {Icon} from 'antd'
import CountDown from '../CountDown'

import './index.less'

function RedirectTo({
  iconType = 'check-circle-o',
  seconds = 3,
  href = '/',
  timeoutCallback,
  title = '首页',
}) {
  function redirect() {
    if (timeoutCallback) {
      return timeoutCallback()
    }
    window.location.replace(href)
  }

  return (
    <p className="RedirectTo__container">
      <Icon className="RedirectTo__icon" type={iconType} />
      操作成功，即将在<CountDown
        className="RedirectTo__link"
        seconds={seconds}
        callback={redirect}
      />秒后
      <a className="RedirectTo__link" href={href} target="_self">
        {title}
      </a>
    </p>
  )
}

export default RedirectTo
