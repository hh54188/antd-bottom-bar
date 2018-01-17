import React from 'react'
import RedirectTo from '../index'

function Reload() {
  return (
    <RedirectTo
      title="刷新页面"
      timeoutCallback={() => {
        location.reload()
      }}
    />
  )
}

export default Reload
