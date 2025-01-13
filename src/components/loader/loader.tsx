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
      tl.to(`.${s.loading}`, {
        opacity: 0
      })
      tl.to(`.${s.letter}`, {
        duration: 1,
        ease: 'power1.out',
        stagger: {
          amount: 0.05,
          from: 'random'
        },
        y: -500
      })
      tl.to(`.${s.overlay}`, {
        duration: 0,
        opacity: 0,
        display: 'none'
      })
    }
  }, [progress, tl])

  return (
    <Html
      style={style}
      center
      className={clsx(s.overlay, progress === 100 ? s.loaded : '')}
    >
      <div className={s.title}>
        <div className={s.letters}>
          <div className={s.letter}>F</div>
          <div className={s.letter}>O</div>
          <div className={s.letter}>L</div>
          <div className={s.letter}>L</div>
          <div className={s.letter}>O</div>
          <div className={s.letter}>W</div>
          <div className={s.letter}>A</div>
          <div className={s.letter}>L</div>
          <div className={s.letter}>L</div>
        </div>
        <div className={s.loading}>{progress.toFixed(2)} % loaded</div>
      </div>
    </Html>
  )
}
