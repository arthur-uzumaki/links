import { Image, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Category } from '@/components/category'

export default function Home() {
  return (
    <View className="flex-1 pt-16">
      <View className="px-6 w-full flex-row justify-between items-center mb-8">
        <Image source={require('@/assets/logo.png')} className="h-8 w-[38px]" />

        <TouchableOpacity activeOpacity={0.8}>
          <MaterialIcons name="add" size={32} color={'#2DD4BF'} />
        </TouchableOpacity>
      </View>
      <View className="px-6">
        <Category name="Projeto" icon="code" isSelected />
        <Category name="Site" icon="language" isSelected />
        <Category name="Video" icon="movie" />
      </View>
    </View>
  )
}
