import { useAppStore } from '~/context/use-app-store'

export default function Shortcuts() {
  const store = useAppStore()
  console.log({store})
  return null
}
