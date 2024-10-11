import {
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Categories } from '@/components/categories'
import { Link } from '@/components/link'
import tailwind from 'tailwindcss/colors'

export default function Home() {
  return (
    <View className="flex-1 pt-16">
      <View className="px-6 w-full flex-row justify-between items-center mb-8">
        <Image source={require('@/assets/logo.png')} className="h-8 w-[38px]" />

        <TouchableOpacity activeOpacity={0.8}>
          <MaterialIcons name="add" size={32} color={'#2DD4BF'} />
        </TouchableOpacity>
      </View>

      <Categories />
      <FlatList
        data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        keyExtractor={item => item}
        className="border-t border-t-gray-600"
        contentContainerClassName="gap-5 p-6 pb-[100px]"
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <Link
            name="Rocketseat"
            url="https://rocketseat.com.br"
            onDetails={() => console.log('Clicou')}
          />
        )}
      />

      <Modal transparent visible>
        <View className="flex-1  justify-end">
          <View className="bg-zinc-900 border-t-2 border-t-gray-800 pb-8 p-11">
            <View className="w-full flex-row mb-8 items-center">
              <Text className="flex-1 text-xl font-medium text-gray-400 ">
                Curso
              </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={tailwind.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text className="text-lg text-gray-200 font-semiBold  ">
              Rocketseat
            </Text>
            <Text className="text-sm text-gray-400 ">
              https://rocketseat.com.br
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}
