import { useDeviceDetect } from '~/hooks/use-device-detect'
import s from './overlay.module.scss'
import Draggable from 'react-draggable'
import { useControls } from 'leva'
import clsx from 'clsx'

export default function Overlay() {
  const { isMobile } = useDeviceDetect()

  const { hint } = useControls({ hint: { value: true, order: 0 } })

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
              <kbd>shift</kbd>
              <kbd>d</kbd>
              <div>for controls</div>
            </div>
          )}
        </div>
      </div>
    </Draggable>
  )
}
