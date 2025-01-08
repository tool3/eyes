'use client'

import CanvasWrapper from '~/components/canvas/canvas'
import CursorLight from '~/components/cursor/cursor'
import Eyes from '~/components/eyes'
import Overlay from '~/components/overlay/overlay'
import TextComponent from '~/components/text/text'

import s from './main.module.scss'

export default function Main() {
  return (
    <div className={s.canvas}>
      <CanvasWrapper>
        <Eyes />
        <TextComponent />
        <CursorLight />
      </CanvasWrapper>
      <Overlay />
    </div>
  )
}
