import { colors } from '@/styles/colors'
import { Platform, TextInput, type TextInputProps } from 'react-native'

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="h-[52px] w-full bg-zinc-900/40 rounded-lg border border-gray-800 p-2.5 text-gray-100 text-base "
      placeholderTextColor={colors.gray[400]}
      cursorColor={colors.gray[100]}
      selectionColor={Platform.OS === 'ios' ? colors.gray[100] : undefined}
      {...rest}
    />
  )
}
