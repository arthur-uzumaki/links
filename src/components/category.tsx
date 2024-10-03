import { Text, Pressable, type PressableProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import tailwind from 'tailwindcss/colors'
import clsx from 'clsx'

interface CategoryProps extends PressableProps {
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
  isSelected?: boolean
}
export function Category({ icon, name, isSelected, ...rest }: CategoryProps) {
  const color = isSelected ? '#2DD4BF' : tailwind.gray[400]
  return (
    <Pressable className="flex-row items-center gap-2" {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />

      <Text
        className={clsx(' font-semiBold text-gray-400', {
          'text-green-300': isSelected,
        })}
      >
        {name}
      </Text>
    </Pressable>
  )
}
