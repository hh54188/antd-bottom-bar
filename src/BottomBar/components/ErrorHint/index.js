import React from 'react'
import {Icon, Tooltip} from 'antd'

import './index.less'

function ErrorHint({error}) {
  return (
    <p className="ErrorHint">
      <Icon className="ErrorHint__icon" type="frown-o" />
      <span>
        操作
        <Tooltip placement="top" title={error} arrowPointAtCenter>
          <a href="javascript:void(0)">出错</a>
        </Tooltip>, 请稍后重试。
        <br />
        或者请联系 liguangyi, wushuang 同学解决
      </span>
    </p>
  )
}

export default ErrorHint
