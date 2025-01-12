/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import { useLayoutEffect, useMemo, useState } from 'react'
import Draggable from 'react-draggable'

import { useAppStore } from '~/context/use-app-store'

import s from './use-shortcuts.module.scss'

export default function useShortCuts() {
  const {
    incIntensity,
    decIntensity,
    incDistance,
    decDistance,
    cycleModel,
    setHint
  } = useAppStore()

  const [open, setOpen] = useState(false)

  function keyDown(e: KeyboardEvent) {
    if (e.code === 'KeyI' && e.altKey) incIntensity(0.5)
    if (e.code === 'KeyJ' && e.altKey) decIntensity(0.5)
    if (e.code === 'KeyM' && e.altKey) cycleModel()
    if (e.code === 'KeyY' && e.altKey) incDistance(0.5)
    if (e.code === 'KeyG' && e.altKey) decDistance(0.5)
    if (e.code === 'KeyS' && e.altKey) setOpen((o) => !o)
    if (e.code === 'KeyH' && e.altKey) setHint()
  }

  useLayoutEffect(() => {
    addEventListener('keydown', keyDown)

    return () => removeEventListener('keydown', keyDown)
  }, [keyDown])

  const shortcutsMenu = useMemo(() => {
    const shortcuts = [
      { key: 'i', description: 'increase intensity' },
      { key: 'j', description: 'decrease intensity' },
      { key: 'y', description: 'increase distance' },
      { key: 'g', description: 'decrease distance' },
      { key: 'm', description: 'cycle models' },
      { key: 's', description: 'show shortcuts' },
      { key: 'h', description: 'show hint' }
    ]
    return shortcuts.map(({ key, description }, i) => {
      return (
        <div key={i} className={s.shortcut}>
          <div className={s.key}>
            <kbd>{'option'}</kbd> <kbd>{key}</kbd>
          </div>
          <div className={s.description}>{description}</div>
        </div>
      )
    })
  }, [])

  return (
    <Draggable defaultClassNameDragging={s.dragging} defaultClassName={s.drag}>
      <div className={clsx(s.container, open ? s.open : s.close)}>
        {shortcutsMenu}
      </div>
    </Draggable>
  )
}
