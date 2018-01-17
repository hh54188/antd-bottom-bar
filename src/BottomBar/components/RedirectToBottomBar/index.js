import React from 'react'
import BottomBar from '../../index'
import RedirectTo from '../RedirectTo'

function RedirectToBottomBar({show, onOverlayClick, onClose, title, href}) {
  return (
    <BottomBar onOverlayClick={onOverlayClick} onClose={onClose} show={show}>
      <RedirectTo title={title} href={href} />
    </BottomBar>
  )
}

export default RedirectToBottomBar
