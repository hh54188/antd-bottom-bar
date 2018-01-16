import React from 'react'
import CountDown from '../CountDown'

import './index.less'

function ToIndex() {
  return (
    <p>
      操作成功，即将在<CountDown
        className="ToIndex__link"
        seconds={3}
        callback={() => {
          window.location.replace('/')
        }}
      />秒后前往
      <a className="ToIndex__link" href="/" target="_self">
        首页
      </a>
    </p>
  )
}

export default ToIndex
