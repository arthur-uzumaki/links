import { categories } from '@/utils/categories'
import { FlatList } from 'react-native'
import { Category } from './category'

export function Categories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Category name={item.name} icon={item.icon} />}
      horizontal
      className="h-[52px] max-h-[52px]"
      contentContainerClassName="gap-6 px-6"
      showsHorizontalScrollIndicator={false}
    />
  )
}
