'use client'

import CanvasWrapper from '~/components/canvas/canvas'
import CursorLight from '~/components/cursor/cursor'
import Models from '~/components/models'
import Overlay from '~/components/overlay/overlay'
import TextComponent from '~/components/text/text'

import s from './main.module.scss'

export default function Main() {
  return (
    <div className={s.canvas}>
      <CanvasWrapper>
        <Models />
        <TextComponent />
        <CursorLight />
      </CanvasWrapper>
      <Overlay />
    </div>
  )
}
