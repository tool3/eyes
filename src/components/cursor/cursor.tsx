/* eslint-disable react/no-unknown-property */
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { useRef } from 'react'

export default function CursorLight() {
  const ref = useRef() as any
  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2.5
    const y = (mouse.y * viewport.height) / 2.5
    ref.current.position.set(x, y, 1)
  })

  const { light, distance, intensity } = useControls(
    'Cursor Light',
    {
      light: {
        value: '#ffffff'
      },
      distance: {
        value: 3,
        min: 0.1,
        max: 30,
        step: 0.1
      },
      intensity: {
        value: 5.5,
        min: 0,
        max: 200,
        step: 0.1
      }
    },
    { order: 3 }
  )

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial emissive={light} emissiveIntensity={1} />
      <pointLight distance={distance} intensity={intensity} color={light} />
    </mesh>
  )
}
