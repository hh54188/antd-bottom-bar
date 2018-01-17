import React from 'react'
import BottomBar from '../../index'

import LoadingHint from '../LoadingHint'

function ErrorBottomBar({show, onOverlayClick, onClose}) {
  return (
    <BottomBar onOverlayClick={onOverlayClick} onClose={onClose} show={show}>
      <LoadingHint />
    </BottomBar>
  )
}

export default ErrorBottomBar
