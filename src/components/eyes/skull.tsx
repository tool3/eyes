
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Object3D } from 'three';
import { useFrame } from '@react-three/fiber';

export default function Skull(props) {
  const { nodes } = useGLTF('/models/skull.glb') as any;

  const instancedMeshRef = useRef() as any
  const count = props.count || 30
  const temp = props.temp || new Object3D()

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2.5
    const y = (mouse.y * viewport.height) / 2.5
    instancedMeshRef.current.lookAt(x, y, 1)
  })

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      temp.position.set(Math.random(), Math.random(), Math.random())
      temp.updateMatrix()
      instancedMeshRef.current.setMatrixAt(i, temp.matrix)
    }

    instancedMeshRef.current.instanceMatrix.needsUpdate = true
  }, [])

  return (
    <instancedMesh ref={instancedMeshRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial001.geometry}
          material={nodes.defaultMaterial001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </instancedMesh>
  )
}

useGLTF.preload('/models/skull.glb')