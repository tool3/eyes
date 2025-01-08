import { useFrame } from '@react-three/fiber'

export default function useLookAt(ref: any) {
  useFrame(({ pointer, viewport }) => {
    const x = (pointer.x * viewport.width) / 2.5
    const y = (pointer.y * viewport.height) / 2.5
    ref.current.lookAt(x, y, 1)
  })

  return null
}
