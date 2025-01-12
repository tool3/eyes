/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

import useLookAt from '~/hooks/use-look-at'

export default function Eye(props) {
  const { nodes, materials } = useGLTF('/models/eye.glb') as any
  const instancedMeshRef = useRef() as any

  useLookAt(instancedMeshRef)

  return (
    <instancedMesh ref={instancedMeshRef} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyeball_1001_eye_1001.geometry}
        material={materials.EyeBlack}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyeball_1002_eye_1002.geometry}
        material={materials.Eye_Iris}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyeball_1003_eye_1003.geometry}
        material={materials['Eye_Tranz.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyeball_1_eye_1.geometry}
        material={materials.Eye_white}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </instancedMesh>
  )
}

useGLTF.preload('/models/eye.glb')
