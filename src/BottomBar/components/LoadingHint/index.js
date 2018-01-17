import React from 'react'
import {Icon} from 'antd'

import './index.less'

function LoadingHint() {
  return (
    <p className="LoadingHint">
      <Icon className="LoadingHint__icon" type="loading" />
      <span>操作中，请稍后</span>
    </p>
  )
}

export default LoadingHint
