import React, { useEffect, useMemo, useRef } from 'react'
import { Center, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MeshStandardMaterial, Object3D } from 'three'

export default function Vader(props) {
  const { nodes } = useGLTF('/models/darth_vader_helmet.glb') as any
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

  const material = useMemo(
    () => new MeshStandardMaterial({ color: 'black', metalness: 0.3, roughness: 0.5, emissive: 'black' }),
    []
  )

  return (
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
  )
}

useGLTF.preload('/models/darth_vader_helmet.glb')
