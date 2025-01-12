import { create } from 'zustand'

// Extend this store if you need!

export interface AppStore {
  fontsLoaded: boolean
  setFontsLoaded: (fontsLoaded: boolean) => void
  intensity: number
  distance: number
  hint: boolean
  model: number
  models: string[]
  incIntensity: (intensity: number) => void
  decIntensity: (intensity: number) => void
  setIntensity: (intensity: number) => void
  setModel: (modelArg?: string) => void
  cycleModel: () => void
  incDistance: (distance: number) => void
  decDistance: (distance: number) => void
  setDistance: (distance: number) => void
  setHint: () => void
}

export const useAppStore = create<AppStore>((set) => ({
  fontsLoaded: false,
  setFontsLoaded: (fontsLoaded: boolean) => set((s) => ({ ...s, fontsLoaded })),
  intensity: 1.5,
  distance: 3,
  model: 0,
  hint: false,
  models: [
    'redEye',
    'eye',
    'suzanne',
    'vader',
    'skull',
    'ironman',
    'deadpool',
    'apollo'
  ],
  incIntensity: (intensity: number) =>
    set((s) => ({ intensity: s.intensity + intensity })),
  decIntensity: (intensity: number) =>
    set((s) => ({ intensity: s.intensity - intensity })),
  setIntensity: (intensity: number) => set(() => ({ intensity })),
  setModel: (model: string) => set((s) => ({ model: s.models.indexOf(model) })),
  cycleModel: () => {
    set((s) => {
      return { model: s.model === s.models.length - 1 ? 0 : s.model + 1 }
    })
  },
  incDistance: (distance: number) =>
    set((s) => ({ distance: s.distance + distance })),
  decDistance: (distance: number) =>
    set((s) => ({ distance: s.distance - distance })),
  setDistance: (distance: number) => set(() => ({ distance })),
  setHint: () => set((s) => ({ hint: !s.hint }))
}))
