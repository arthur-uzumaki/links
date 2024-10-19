import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import tailwind from 'tailwindcss/colors'

import { router } from 'expo-router'
import { Categories } from '@/components/categories'
import { Input } from '@/components/input'
import { Button } from '@/components/button'

export default function Add() {
  const [category, setCategory] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [url, setUrl] = useState<string>('')

  function navigateHome() {
    router.navigate('/')
  }

  function handleAdd() {
    console.log({ name, url })
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

      <Categories selected={category} onChange={setCategory} />

      <View className="gap-4 p-6 ">
        <Input
          placeholder="Nome"
          onChangeText={setName}
          autoCorrect={false}
          autoFocus
        />
        <Input placeholder="Url" onChangeText={setUrl} />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  )
}
