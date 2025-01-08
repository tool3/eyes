import { Text } from '@react-three/drei'
import { useMemo } from 'react'
import { MeshStandardMaterial, Vector3 } from 'three'
import { useDeviceDetect } from '~/hooks/use-device-detect'

export default function TextComponent({ text = 'BY TAL HAYUT' }) {
  const material = useMemo(
    () => new MeshStandardMaterial({ color: 'white', roughness: 0.8, metalness: 1,  }),
    []
  )
  const { isMobile } = useDeviceDetect()
  const y = isMobile ? -2.45 : -2.5
  const scale = isMobile ? new Vector3(0.3, 0.3, 0.3) : new Vector3(1, 1, 1)
  const position = new Vector3(0, y, -0.5);
  return (
    <Text
      font={'/fonts/Dela_Gothic_One/DelaGothicOne-Regular.ttf'}
      position={position}
      scale={scale}
      color="white"
      anchorX="center"
      anchorY="middle"
      material={material}
    >
      {text}
    </Text>
  )
}
