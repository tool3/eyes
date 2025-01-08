import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Object3D } from 'three'


export default function Eye(props) {
  const { nodes, materials } = useGLTF('/models/eye.glb') as any
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
