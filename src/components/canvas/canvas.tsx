/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva, useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { Suspense, useState } from 'react'

import Debug from '../debug/debug'
import Loader from '../loader/loader'

function FPS({ fps }: { fps: boolean }) {
  return fps ? <Stats className="stats" /> : null
}

export default function CanvasWrapper({ children }) {
  const [active, setActive] = useState(false)

  const { fps, perf } = useControls(
    'Monitor',
    {
      fps: { value: false, color: 'red' },
      perf: false
    },
    { order: 5, collapsed: true }
  )

  const { background } = useControls({
    background: { value: 'black', order: 1 }
  })

  return (
    <>
      <Leva hidden={!active} />
      <FPS fps={fps} />
      <Debug set={setActive} />

      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance'
        }}
        camera={{ frustumCulled: true, fov: 65, position: [0, 0, 6] }}
      >
        <color attach="background" args={[background]} />
        {perf ? <Perf position="top-left" /> : null}
        <Suspense fallback={null}>{children}</Suspense>
        <Loader />
        <OrbitControls enabled={false} />
      </Canvas>
    </>
  )
}
