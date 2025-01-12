import { useEffect } from 'react'

import { useAppStore } from '~/context/use-app-store'

export default function Shortcuts() {
  const { inc, dec, setModel } = useAppStore()
  function keyDown(e) {
    if (e.code === 'KeyI' && e.altKey) {
      inc(1)
    }
    if (e.code === 'KeyJ' && e.altKey) {
      dec(1)
    }
    if (e.code === 'KeyM' && e.altKey) {
      setModel()
    }
  }

  useEffect(() => {
    addEventListener('keydown', keyDown)
  }, [])
  return null
}
