import React from 'react'
import BottomBar from '../../index'
import Reload from '../RedirectTo/Reload'

function ReloadBottomBar({show, onOverlayClick, onClose}) {
  return (
    <BottomBar onOverlayClick={onOverlayClick} onClose={onClose} show={show}>
      <Reload />
    </BottomBar>
  )
}

export default ReloadBottomBar
