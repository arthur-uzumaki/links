import {
  Text,
  type TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import clsx from 'clsx'

import tailwind from 'tailwindcss/colors'

type Variants = 'primary' | 'secondary'

interface OptionsProps extends TouchableOpacityProps {
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: Variants
}

export function Options({
  name,
  icon,
  variant = 'primary',
  ...rest
}: OptionsProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center gap-[5px] text-red-400"
      {...rest}
    >
      <MaterialIcons
        name={icon}
        size={20}
        color={variant === 'primary' ? '#2DD4BF' : tailwind.gray[400]}
      />
      <Text
        className={clsx('text-lg', {
          'text-green-300 font-semiBold': variant === 'primary',
          'text-gray-400': variant === 'secondary',
        })}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}
