import { useDeviceDetect } from '~/hooks/use-device-detect'
import s from './overlay.module.scss'
import Draggable from 'react-draggable'

export default function Overlay() {
  const { isMobile } = useDeviceDetect()

  return (
    <Draggable>
      <div className={s.overlay}>
        <div className={s.instructions}>
          {isMobile ? (
            <div className={s.mobile}>3 finger tap for debugger</div>
          ) : (
            <div className={s.desktop}>
              <kbd>shift</kbd>
              <kbd>d</kbd>
              <div>for debugger</div>
            </div>
          )}
        </div>
      </div>
    </Draggable>
  )
}
