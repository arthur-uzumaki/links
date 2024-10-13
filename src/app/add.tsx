import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import tailwind from 'tailwindcss/colors'

export default function Add() {
  return (
    <View className="flex-1 pt-[62px]">
      <View className="flex-row justify-between px-6 mb-4">
        <MaterialIcons name="arrow-back" size={32} color={tailwind.zinc[200]} />
        <Text className="text-gray-200 font-semiBold text-2xl">Novo</Text>
      </View>
      <Text className="text-gray-400 px-6  text-sm">
        Selecione uma categoria
      </Text>
    </View>
  )
}
