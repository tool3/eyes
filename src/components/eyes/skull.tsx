/* eslint-disable react/no-unknown-property */
import { Center, useGLTF } from '@react-three/drei'
import { useRef } from 'react'

import useLookAt from '~/hooks/use-look-at'
import useMatcaps from '~/hooks/use-matcaps'

import SuspenseLoader from './suspense-loader'

export default function Skull(props) {
  const { nodes } = useGLTF('/models/skull.glb') as any

  const instancedMeshRef = useRef() as any

  useLookAt(instancedMeshRef)
  const material = useMatcaps({ name: 'Skull' })

  return (
    <SuspenseLoader>
      <instancedMesh ref={instancedMeshRef} {...props} dispose={null}>
        <Center>
          <group rotation={[-Math.PI / 2.5, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial001.geometry}
              material={material}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
        </Center>
      </instancedMesh>
    </SuspenseLoader>
  )
}

useGLTF.preload('/models/skull.glb')
