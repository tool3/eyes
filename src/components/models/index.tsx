import { useControls } from 'leva'

import { useAppStore } from '~/context/use-app-store'

import Apollo from './apollo'
import Deadpool from './deadpool'
import Eye from './eye'
import IronMan from './ironman'
import RedEye from './red-eye'
import Skull from './skull'
import SuspenseLoader from './suspense-loader'
import Suzanne from './suzanne'
import Vader from './vader'

export default function Models({ ...props }) {
  const { model, models, setModel } = useAppStore((s) => ({
    model: s.model,
    models: s.models,
    setModel: s.setModel
  }))

  const modelComponents = {
    eye: Eye,
    redEye: RedEye,
    suzanne: Suzanne,
    vader: Vader,
    skull: Skull,
    ironman: IronMan,
    deadpool: Deadpool,
    apollo: Apollo
  }

  useControls({
    model: {
      value: 'redEye',
      options: {
        eye: 'eye',
        redEye: 'redEye',
        suzanne: 'suzanne',
        vader: 'vader',
        skull: 'skull',
        ironman: 'ironman',
        deadpool: 'deadpool',
        apollo: 'apollo'
      },
      onChange: (val) => setModel(val)
    }
  })

  const modelString = models[model]
  const Model = modelComponents[modelString]
  const scale = modelString === 'eye' ? 0.3 : 0.6

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
