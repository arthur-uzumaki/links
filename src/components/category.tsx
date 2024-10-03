import { Text, Pressable, type PressableProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import tailwind from 'tailwindcss/colors'

interface CategoryProps extends PressableProps {
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
}
export function Category({ icon, name, ...rest }: CategoryProps) {
  return (
    <Pressable className="flex-row items-center gap-2" {...rest}>
      <MaterialIcons name={icon} size={16} color={tailwind.gray[400]} />
      <Text className=" font-semiBold text-gray-400">{name}</Text>
    </Pressable>
  )
}
