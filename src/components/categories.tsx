import { categories } from '@/utils/categories'
import { FlatList } from 'react-native'
import { Category } from './category'

interface CategoriesProps {
  selected: string
  onChange: (category: string) => void
}

export function Categories({ onChange, selected }: CategoriesProps) {
  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      className="h-[52px] max-h-[52px]"
      contentContainerClassName="gap-6 px-6"
      showsHorizontalScrollIndicator={false}
    />
  )
}
