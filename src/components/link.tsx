import { Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import tailwind from 'tailwindcss/colors'

interface LinkProps {
  name: string
  url: string
  onDetails: () => void
}

export function Link({ name, url, onDetails }: LinkProps) {
  return (
    <View className="flex-row w-full items-center gap-3 ">
      <View className="flex-1">
        <Text numberOfLines={1} className="text-gray-100 font-semiBold">
          {name}
        </Text>
        <Text numberOfLines={1} className="text-gray-400 text-sm">
          {url}
        </Text>
      </View>

      <TouchableOpacity onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={20} color={tailwind.gray[400]} />
      </TouchableOpacity>
    </View>
  )
}
