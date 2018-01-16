import React from 'react'
import CountDown from '../CountDown'

import './index.less'

function RedirectTo({href = '/', title = '首页'}) {
  return (
    <p>
      操作成功，即将在<CountDown
        className="RedirectTo__link"
        seconds={3}
        callback={() => {
          window.location.replace('/')
        }}
      />秒后前往
      <a className="RedirectTo__link" href={href} target="_self">
        {title}
      </a>
    </p>
  )
}

export default RedirectTo
