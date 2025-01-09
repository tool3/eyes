/* eslint-disable react/no-unknown-property */
import { Html, OrbitControls, Stats, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { Leva, useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { Suspense, useState } from 'react'

import Debug from '../debug/debug'
import s from './canvas.module.scss'

function Loader() {
  const { progress } = useProgress()

  const style = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  } as any

  return (
    <Html
      style={style}
      center
      className={clsx(s.overlay, progress === 100 && s.loaded)}
    >
      <div className={s.title}>
        {/* <Image
          src="/images/followers.svg"
          priority
          quality={100}
          width={800}
          height={800}
          sizes="100vw"
          alt="followers"
          className={s.image}
        /> */}
        FOLLOWALL
        <div className={s.loading}>{progress.toFixed(2)} % loaded</div>
      </div>
    </Html>
  )
}

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
        {/* <Loader /> */}
        <Suspense fallback={<Loader />}>{children}</Suspense>
        <OrbitControls enabled={false} />
      </Canvas>
    </>
  )
}
