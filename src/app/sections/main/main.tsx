'use client'

import CanvasWrapper from '~/components/canvas/canvas'
import CursorLight from '~/components/cursor/cursor'
import Eyes from '~/components/eyes'
import s from './main.module.scss'
import TextComponent from '~/components/text/text'
import Overlay from '~/components/overlay/overlay'

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
