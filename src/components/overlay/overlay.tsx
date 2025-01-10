import clsx from 'clsx'
import { useControls } from 'leva'
import Draggable from 'react-draggable'

import { useDeviceDetect } from '~/hooks/use-device-detect'

import s from './overlay.module.scss'

export default function Overlay() {
  const { isMobile, isMacOs } = useDeviceDetect()

  const { hint } = useControls({ hint: { value: true, order: 0 } })
  const mainKey = isMacOs ? 'option' : 'alt'

  return (
    <Draggable
      defaultClassName={clsx(s.drag, hint ? s.visible : s.hidden)}
      defaultClassNameDragging={s.dragging}
    >
      <div className={s.overlay}>
        <div className={s.instructions}>
          {isMobile ? (
            <div className={s.mobile}>3 finger tap for controls</div>
          ) : (
            <div className={s.desktop}>
              <kbd>{mainKey}</kbd>
              <kbd>d</kbd>
              <div>for controls</div>
            </div>
          )}
        </div>
      </div>
    </Draggable>
  )
}
