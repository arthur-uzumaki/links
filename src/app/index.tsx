import { useCallback, useState } from 'react'
import {
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from 'react-native'
import { router, useFocusEffect } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

import { Categories } from '@/components/categories'
import { Link } from '@/components/link'
import { Options } from '@/components/options'
import tailwind from 'tailwindcss/colors'
import { categories } from '@/utils/categories'
import { linkStorage, type LinkStorage } from '@/storage/link-storage'

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [category, setCategory] = useState(categories[0].name)
  const [links, setLinks] = useState<LinkStorage[] | null>(null)
  const [link, setLink] = useState<LinkStorage | null>(null)

  function navigateAddScreenLink() {
    router.navigate('/add')
  }

  function handleDetails(selected: LinkStorage) {
    setShowModal(true)
    setLink(selected)
  }

  useFocusEffect(
    useCallback(() => {
      async function getLinks() {
        try {
          const response = await linkStorage.get()

          const filteredLink = response.filter(
            item => item.category === category
          )

          const data = setLinks(filteredLink)
          return data
        } catch (error) {
          Alert.alert('Erro', 'Não foi possível obter os links  ')
        }
      }

      getLinks()
    }, [category])
  )

  return (
    <View className="flex-1 pt-16">
      <View className="px-6 w-full flex-row justify-between items-center mb-8">
        <Image source={require('@/assets/logo.png')} className="h-8 w-[38px]" />

        <TouchableOpacity activeOpacity={0.8} onPress={navigateAddScreenLink}>
          <MaterialIcons name="add" size={32} color={'#2DD4BF'} />
        </TouchableOpacity>
      </View>

      <Categories selected={category} onChange={setCategory} />
      <FlatList
        data={links}
        keyExtractor={item => item.id}
        className="border-t border-t-gray-600"
        contentContainerClassName="gap-5 p-6 pb-[100px]"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => handleDetails(item)}
          />
        )}
      />

      <Modal transparent visible={showModal} animationType="fade">
        <View className="flex-1  justify-end">
          <View className="bg-zinc-900 border-t-2 border-t-gray-800 pb-8 p-11">
            <View className="w-full flex-row mb-8 items-center">
              <Text className="flex-1 text-xl font-medium text-gray-400 ">
                {link?.category}
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowModal(false)}
              >
                <MaterialIcons
                  name="close"
                  size={20}
                  color={tailwind.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text className="text-lg text-gray-200 font-semiBold  ">
              {link?.name}
            </Text>
            <Text className="text-sm text-gray-400 ">{link?.url}</Text>

            <View className="flex-row w-full justify-between mt-8 border-t-2 border-t-gray-600 py-3">
              <Options name="Excluir " icon="delete" variant="secondary" />
              <Options name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
