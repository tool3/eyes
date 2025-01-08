import { useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { useControls } from 'leva'
import { useEffect, useRef } from 'react'
import { Object3D, TextureLoader } from 'three'

const options = Array.from(
  { length: 61 },
  (_, i) => 'matcap_' + (i + 1) + '.png'
).reduce((acc, curr) => {
  acc[curr.replace('.png', '')] = curr
  return acc
}, {})

export default function Suzanne(props) {
  const { nodes } = useGLTF('/models/suzanne.glb') as any
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

  const matcap = useControls(
    'Suzanne',
    {
      matcap: {
        value: 'matcap_61.png',
        options
      }
    },
    { order: 2 }
  )

  const [map] = useLoader(TextureLoader, [`/textures/matcaps/${matcap.matcap}`])

  return (
    <instancedMesh ref={instancedMeshRef} {...props} count={30}>
      <mesh geometry={nodes.Suzanne.geometry}>
        <meshMatcapMaterial matcap={map} />
      </mesh>
    </instancedMesh>
  )
}
