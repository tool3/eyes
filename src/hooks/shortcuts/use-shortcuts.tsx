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
    lockAxis,
    setHint
  } = useAppStore((s) => ({
    incIntensity: s.incIntensity,
    decIntensity: s.decIntensity,
    incDistance: s.incDistance,
    decDistance: s.decDistance,
    cycleModel: s.cycleModel,
    lockAxis: s.lockAxis,
    setHint: s.setHint
  }))

  const [open, setOpen] = useState(false)

  // LOCKED MODE AND THATS IT

  function keyDown(e: KeyboardEvent) {
    if (e.code === 'KeyI' && e.altKey) incIntensity(5)
    if (e.code === 'KeyJ' && e.altKey) decIntensity(5)
    if (e.code === 'KeyM' && e.altKey) cycleModel()
    if (e.code === 'KeyG' && e.altKey) incDistance(0.5)
    if (e.code === 'KeyV' && e.altKey) decDistance(0.5)
    if (e.code === 'KeyY' && e.altKey) lockAxis('y')
    if (e.code === 'KeyX' && e.altKey) lockAxis('x')
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
      { key: 'x', description: 'lock axis x' },
      { key: 'y', description: 'lock axis y' },
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
