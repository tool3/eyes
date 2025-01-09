/* eslint-disable react/no-unknown-property */
import { Center, useGLTF } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import { MeshStandardMaterial } from 'three'

import useLookAt from '~/hooks/use-look-at'

export default function IronMan(props) {
  const { nodes, materials } = useGLTF('/models/ironman.glb') as any
  const instancedMeshRef = useRef() as any
  useLookAt(instancedMeshRef)

  const eyesMaterial = useMemo(
    () => new MeshStandardMaterial({ emissive: 'white', emissiveIntensity: 5 }),
    []
  )

  return (
    <instancedMesh ref={instancedMeshRef} {...props} dispose={null}>
      <Center>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials.TT_checker_4096x4096_UV_GRID}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.TT_checker_4096x4096_UV_GRID}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_2.geometry}
              material={materials.TT_checker_4096x4096_UV_GRID}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_3.geometry}
              material={eyesMaterial}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_4.geometry}
              material={materials.TT_checker_4096x4096_UV_GRID}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
        </group>
      </Center>
    </instancedMesh>
  )
}

useGLTF.preload('/models/ironman.glb')
