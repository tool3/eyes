import { Html } from '@react-three/drei'
import { Suspense } from 'react'

export default function SuspenseLoader({
  children,
  text = 'Loading Textures'
}) {
  return (
    <Suspense
      fallback={
        <Html center style={{ zIndex: 0, width: '200px' }}>
          {text}
        </Html>
      }
    >
      {children}
    </Suspense>
  )
}
