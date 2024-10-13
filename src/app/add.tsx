import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import tailwind from 'tailwindcss/colors'
import { router } from 'expo-router'
import { Categories } from '@/components/categories'

export default function Add() {
  function navigateHome() {
    router.navigate('/')
  }
  return (
    <View className="flex-1 pt-[62px]">
      <View className="flex-row justify-between px-6 mb-4">
        <TouchableOpacity activeOpacity={0.8} onPress={navigateHome}>
          <MaterialIcons
            name="arrow-back"
            size={32}
            color={tailwind.zinc[200]}
          />
        </TouchableOpacity>
        <Text className="text-gray-200 font-semiBold text-2xl">Novo</Text>
      </View>

      <Text className="text-gray-400 px-6  text-sm">
        Selecione uma categoria
      </Text>

      <Categories />
    </View>
  )
}
