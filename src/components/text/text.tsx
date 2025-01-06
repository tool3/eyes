import { Text } from '@react-three/drei'
import { useMemo } from 'react'
import { MeshStandardMaterial } from 'three'
import { useDeviceDetect } from '~/hooks/use-device-detect'

export default function TextComponent({ text = 'BY TAL HAYUT' }) {
  const material = useMemo(
    () => new MeshStandardMaterial({ color: 'white', roughness: 0.1, metalness: 0 }),
    []
  )
  const { isMobile } = useDeviceDetect()
  const y = isMobile ? -2.6 : -2.5
  const scale = isMobile ? 0.3 : 1

  return (
    <Text
      font={'/fonts/Dela_Gothic_One/DelaGothicOne-Regular.ttf'}
      position={[0, y, -1]}
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
