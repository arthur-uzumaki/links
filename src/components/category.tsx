import { Text, View, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import tailwind from 'tailwindcss/colors'
export function Category() {
  return (
    <Pressable className="flex-row items-center gap-2">
      <MaterialIcons name="code" size={16} color={tailwind.gray[400]} />
      <Text className="text-base font-semiBold text-gray-400">Projetos</Text>
    </Pressable>
  )
}
