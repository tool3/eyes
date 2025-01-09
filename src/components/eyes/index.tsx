import { useControls } from 'leva'

import Eye from './eye'
import IronMan from './ironman'
import RedEye from './red-eye'
import Skull from './skull'
import SuspenseLoader from './suspense-loader'
import Suzanne from './suzanne'
import Vader from './vader'
import Deadpool from './deadpool'

export default function Eyes({ ...props }) {
  const { model } = useControls({
    model: {
      value: 'redEye',
      options: {
        eye: 'eye',
        redEye: 'redEye',
        suzanne: 'suzanne',
        vader: 'vader',
        skull: 'skull',
        ironman: 'ironman',
        deadpool: 'deadpool'
      }
    }
  })

  function getModel(model: string) {
    switch (model) {
      case 'eye':
        return Eye
      case 'redEye':
        return RedEye
      case 'suzanne':
        return Suzanne
      case 'vader':
        return Vader
      case 'skull':
        return Skull
      case 'ironman':
        return IronMan
      case 'deadpool':
        return Deadpool
    }
  }

  const Model = getModel(model)
  const scale = model === 'eye' ? 0.3 : 0.6

  return (
    <SuspenseLoader text="Loading Model">
      <group {...props}>
        {[...Array(5).keys()].map((i) => (
          <group key={i * 6}>
            <Model scale={scale} position={[-5, -3 + i * 1.5, 0]} />
            <Model scale={scale} position={[-3, -3 + i * 1.5, 0]} />
            <Model scale={scale} position={[-1, -3 + i * 1.5, 0]} />
            <Model scale={scale} position={[1, -3 + i * 1.5, 0]} />
            <Model scale={scale} position={[3, -3 + i * 1.5, 0]} />
            <Model scale={scale} position={[5, -3 + i * 1.5, 0]} />
          </group>
        ))}
      </group>
    </SuspenseLoader>
  )
}
