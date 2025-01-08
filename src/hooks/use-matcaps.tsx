import { useLoader } from '@react-three/fiber'
import { useControls } from 'leva'
import { MeshBasicMaterial, MeshMatcapMaterial, MeshStandardMaterial, TextureLoader } from 'three'

const options = Array.from(
  { length: 61 },
  (_, i) => 'matcap_' + (i + 1) + '.png'
).reduce((acc, curr) => {
  acc[curr.replace('.png', '')] = curr
  return acc
}, {})

export default function useMatcaps({
  name,
  defaultMatcap = 'matcap_placeholder.png',
  material = new MeshStandardMaterial()
}: {
  name: string,
  defaultMatcap?: string,
  material?: any
}) {
  options['default'] = 'matcap_placeholder.png'

  const matcap = useControls(name, {
    matcap: {
      value: defaultMatcap,
      options
    }
  })
  const isDefault = matcap.matcap === 'matcap_placeholder.png'
  const [map] = useLoader(TextureLoader, [`/textures/matcaps/${matcap.matcap}`])
  
  return isDefault ? material : new MeshMatcapMaterial({ matcap: map });
}
