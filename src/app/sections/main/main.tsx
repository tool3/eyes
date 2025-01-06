'use client'

import CanvasWrapper from '~/components/canvas/canvas'
import CursorLight from '~/components/cursor/cursor'
import Eyes from '~/components/eyes'
import s from './main.module.scss'
import TextComponent from '~/components/text/text'

export default function Main() {
  return (
    <div className={s.canvas}>
      <CanvasWrapper>
        <Eyes />
        <TextComponent />
        <CursorLight />
      </CanvasWrapper>
    </div>
  )
}
