import { Html, useProgress } from '@react-three/drei'
import clsx from 'clsx'
import gsap from 'gsap'
import { useLayoutEffect } from 'react'

import s from './loader.module.scss'

export default function Loader() {
  const { progress } = useProgress()
  const tl = gsap.timeline()

  const style = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  } as any

  useLayoutEffect(() => {
    if (progress === 100) {
      tl.to(`.${s.name}`, {
        opacity: 0
      })
      tl.to(`.${s.letter}`, {
        duration: 1,
        ease: 'power1.out',
        stagger: 0.03,
        y: '-100vh'
      })
      tl.to(`.${s.overlay}`, {
        duration: 0,
        opacity: 0,
        display: 'none'
      })
    }
  }, [progress, tl])

  const percentage = progress.toFixed(0).split('')

  return (
    <Html
      style={style}
      center
      className={clsx(s.overlay, progress === 100 ? s.loaded : '')}
    >
      <div className={s.title}>
        <div className={s.name}>FOLLOWALL</div>
        <div className={s.loading}>
          <div className={s.letters}>
            <div className={s.letter}>{percentage[0]}</div>
            <div className={s.letter}>{percentage[1]}</div>
            <div className={s.letter}>{percentage[2]}</div>
          </div>
        </div>
      </div>
    </Html>
  )
}
