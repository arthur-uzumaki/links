import '@/styles/global.css'
import { Slot } from 'expo-router'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { Loading } from '@/components/loading'

export default function LayoutRoot() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  if (!fontLoaded) {
    return <Loading />
  }

  return <Slot />
}
