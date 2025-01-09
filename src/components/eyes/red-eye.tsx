/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function RedEye(props) {
  const { nodes, materials } = useGLTF('/models/red_eye.glb') as any
  const instancedMeshRef = useRef() as any

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2.5
    const y = (mouse.y * viewport.height) / 2.5
    instancedMeshRef.current.lookAt(x, y, 1)
  })

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
