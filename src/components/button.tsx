import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="h-[52px] w-full bg-green-300 rounded-lg items-center justify-center"
      {...rest}
    >
      <Text className="text-green-900 text-base font-semiBold">{title}</Text>
    </TouchableOpacity>
  )
}
