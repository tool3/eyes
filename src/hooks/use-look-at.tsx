import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

import { useAppStore } from '~/context/use-app-store'

export default function useLookAt(ref: any) {
  const { axisLock, lockAxis, depth } = useAppStore()
  useControls({
    locked: {
      value: 'none',
      options: {
        none: 'none',
        x: 'x',
        y: 'y'
      },
      onChange: lockAxis
    }
  })

  useFrame(({ pointer, viewport }) => {
    const x = (pointer.x * viewport.width) / 2.5
    const y = (pointer.y * viewport.height) / 2.5

    if (axisLock === 'none') ref.current.lookAt(x, y, depth)
    if (axisLock === 'x') ref.current.lookAt(ref.current.position.x, y, depth)
    if (axisLock === 'y') ref.current.lookAt(x, ref.current.position.y, depth)
  })

  return null
}
