import React from 'react'
import BottomBar from '../../index'
import ToIndex from '../RedirectTo/ToIndex'

function ReloadBottomBar({show, onOverlayClick, onClose}) {
  return (
    <BottomBar onOverlayClick={onOverlayClick} onClose={onClose} show={show}>
      <ToIndex />
    </BottomBar>
  )
}

export default ReloadBottomBar
