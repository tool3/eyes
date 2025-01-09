/* eslint-disable react/no-unknown-property */
import { Center, useGLTF } from '@react-three/drei'
import { useRef } from 'react'

import useLookAt from '~/hooks/use-look-at'

export default function Deadpool(props) {
  const { nodes, materials } = useGLTF('/models/deadpool.glb') as any
  const instancedMeshRef = useRef() as any
  useLookAt(instancedMeshRef)

  return (
    <instancedMesh ref={instancedMeshRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        <Center>
          <group rotation={[0, 0, -Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.Default}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.Material2}
            />
          </group>
        </Center>
      </group>
    </instancedMesh>
  )
}

useGLTF.preload('/models/deadpool.glb')
