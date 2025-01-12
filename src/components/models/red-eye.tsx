/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

import useLookAt from '~/hooks/use-look-at'

export default function RedEye(props) {
  const { nodes, materials } = useGLTF('/models/red_eye.glb') as any
  const instancedMeshRef = useRef() as any

  useLookAt(instancedMeshRef)

  return (
    <instancedMesh ref={instancedMeshRef} {...props} dispose={null}>
      <group rotation={[-1.807, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[0, 0, 16.654]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Eye_Eye_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Eye_Iris_0.geometry}
              material={materials.Iris}
            />
          </group>
        </group>
      </group>
    </instancedMesh>
  )
}

useGLTF.preload('/models/red_eye.glb')
