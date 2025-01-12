/* eslint-disable react/no-unknown-property */
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { useRef } from 'react'

import { useAppStore } from '~/context/use-app-store'

export default function CursorLight() {
  const ref = useRef() as any
  const sphereRef = useRef() as any
  const { intensity, setIntensity, distance, setDistance, depth, setDepth } =
    useAppStore()

  useFrame(({ pointer, viewport }) => {
    const x = (pointer.x * viewport.width) / 2.5
    const y = (pointer.y * viewport.height) / 2.5
    ref.current.position.set(x, y, depth)
  })

  const { light, sphere } = useControls(
    'Cursor Light',
    {
      light: {
        value: '#ffffff'
      },
      depth: {
        value: 1,
        min: 1,
        max: 10,
        step: 0.1,
        onChange: setDepth
      },
      distance: {
        value: distance,
        min: 0.1,
        max: 30,
        step: 0.1,
        onChange: setDistance
      },
      intensity: {
        value: intensity,
        min: 0,
        max: 200,
        step: 0.1,
        onChange: setIntensity
      },
      sphere: {
        value: true
      }
    },
    { order: 3 }
  )

  return (
    <mesh ref={ref}>
      <sphereGeometry ref={sphereRef} args={[0.1, 32, 32]} />
      <meshStandardMaterial
        emissive={light}
        emissiveIntensity={1}
        visible={sphere}
      />
      <pointLight distance={distance} intensity={intensity} color={light} />
    </mesh>
  )
}
