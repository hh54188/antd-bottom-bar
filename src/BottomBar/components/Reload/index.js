import React from 'react'
import CountDown from '../CountDown'

import './index.less'

function Reload() {
  return (
    <p>
      操作成功，即将在<CountDown
        className="Reload__link"
        seconds={3}
        callback={() => {
          location.reload()
        }}
      />秒后刷新页面
    </p>
  )
}

export default Reload
