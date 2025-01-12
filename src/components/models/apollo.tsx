/* eslint-disable react/no-unknown-property */
import { Center, useGLTF } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import { MeshStandardMaterial } from 'three'

import useLookAt from '~/hooks/use-look-at'

export default function Apollo(props) {
  const { nodes } = useGLTF('/models/apollo.glb') as any
  const instancedMeshRef = useRef() as any
  useLookAt(instancedMeshRef)

  const material = useMemo(
    () => new MeshStandardMaterial({ color: 'white' }),
    []
  )

  return (
    <instancedMesh ref={instancedMeshRef} {...props} dispose={null}>
      <Center>
        <group rotation={[0, 0, 0]} {...props} dispose={null} scale={6.5}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.model_tex_u1_v1_0001.geometry}
            material={material}
            rotation={[0, Math.PI, 0]}
            position={[-0.02, 0.012, 0.177]}
          />
        </group>
      </Center>
    </instancedMesh>
  )
}

useGLTF.preload('/models/apollo.glb')
