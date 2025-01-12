import { create } from 'zustand'

// Extend this store if you need!

export interface AppStore {
  fontsLoaded: boolean
  setFontsLoaded: (fontsLoaded: boolean) => void
  intensity: number
  model: number
  models: string[]
  inc: (intensity: number) => void
  dec: (intensity: number) => void
  setIntensity: (intensity: number) => void
  setModel: (model?: string) => void
}

export const useAppStore = create<AppStore>((set) => ({
  fontsLoaded: false,
  setFontsLoaded: (fontsLoaded: boolean) => set((s) => ({ ...s, fontsLoaded })),
  intensity: 1.5,
  model: 0,
  models: ['redEye', 'eye', 'suzanne', 'vader', 'skull', 'ironman', 'deadpool'],
  inc: (intensity: number) =>
    set((s) => ({ intensity: s.intensity + intensity })),
  dec: (intensity: number) =>
    set((s) => ({ intensity: s.intensity - intensity })),
  setIntensity: (intensity: number) => set(() => ({ intensity })),
  setModel: (modelArg?: string) =>
    set((s) => ({
      model: modelArg
        ? s.models.indexOf(modelArg)
        : s.model === s.models.length - 1
          ? 0
          : s.model + 1
    }))
}))
