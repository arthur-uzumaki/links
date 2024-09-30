import '@/styles/global.css'
import { Stack } from 'expo-router'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { Loading } from '@/components/loading'
import tailwind from 'tailwindcss/colors'

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

  const backgroundColor = tailwind.zinc[950]
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor },
      }}
    />
  )
}
