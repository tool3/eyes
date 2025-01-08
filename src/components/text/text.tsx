import { Text } from '@react-three/drei'
import { useControls } from 'leva'
import { useMemo } from 'react'
import { MeshStandardMaterial, Vector2, Vector3 } from 'three'

import { useDeviceDetect } from '~/hooks/use-device-detect'

export default function TextComponent() {
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: 'white',
        roughness: 0.8,
        metalness: 1
      }),
    []
  )
  const { isMobile } = useDeviceDetect()
  const y = isMobile ? 2.45 : 2.5
  const scale = isMobile ? new Vector3(0.3, 0.3, 0.3) : new Vector3(1, 1, 1)

  const { text, color, pos, size } = useControls(
    'Text',
    {
      text: { value: 'BY TAL HAYUT' },
      color: '#ffffff',
      pos: { value: new Vector2(0, y), step: 0.1, max: 4, min: -4 } as any,
      size: { value: 1, step: 0.1, max: 10, min: 0.5 }
    },
    { order: 4 }
  )

  return (
    <Text
      font={'/fonts/Dela_Gothic_One/DelaGothicOne-Regular.ttf'}
      position={new Vector3(pos.x, -pos.y, -0.5)}
      scale={scale}
      color={color}
      fontSize={size}
      anchorX="center"
      anchorY="middle"
      material={material}
    >
      {text}
    </Text>
  )
}
