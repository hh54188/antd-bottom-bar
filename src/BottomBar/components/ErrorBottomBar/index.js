import React from 'react'
import BottomBar from '../../index'
import ErrorHint from '../ErrorHint'

function ErrorBottomBar({show, onOverlayClick, onClose, error}) {
  return (
    <BottomBar onOverlayClick={onOverlayClick} onClose={onClose} show={show}>
      <ErrorHint error={error} />
    </BottomBar>
  )
}

export default ErrorBottomBar
