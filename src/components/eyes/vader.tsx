import { Center, useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { MeshStandardMaterial } from 'three'
import useLookAt from '~/hooks/use-look-at'
import useMatcaps from '~/hooks/use-matcaps'
import SuspenseLoader from './suspense-loader'

export default function Vader(props) {
  const { nodes } = useGLTF('/models/darth_vader_helmet.glb') as any
  const instancedMeshRef = useRef(null)

  useLookAt(instancedMeshRef)

  const material = useMatcaps({
    name: 'Vader',
    defaultMatcap: 'matcap_49.png',
    material: new MeshStandardMaterial({
      color: 'black',
      metalness: 0.3,
      roughness: 0.5,
      emissive: 'black'
    })
  })

  return (
    <SuspenseLoader>
      <instancedMesh ref={instancedMeshRef} {...props} dispose={null}>
        <Center>
          <group scale={0.2} rotation={[-2.17, 0.002, -1.429]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane014_MetalGraphitePitted001_3K_0.geometry}
              material={material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane014_MetalFineSilver001_3K_0.geometry}
              material={material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane014_MetalGraphitePitted001_3K001_0.geometry}
              material={material}
            />
          </group>
        </Center>
      </instancedMesh>
    </SuspenseLoader>
  )
}

useGLTF.preload('/models/darth_vader_helmet.glb')
