import { env } from '@/env/env'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LINK_STORAGE_KEY = env.EXPO_PUBLIC_LINK

export interface LinkStorage {
  id: string
  name: string
  url: string
  category: string
}

async function get(): Promise<LinkStorage[]> {
  const linkStorage = await AsyncStorage.getItem(LINK_STORAGE_KEY)
  const response = linkStorage ? JSON.parse(linkStorage) : []

  return response
}

async function save(newLink: LinkStorage) {
  try {
    const linkStorage = await get()
    const updated = [...linkStorage, newLink]

    await AsyncStorage.setItem(LINK_STORAGE_KEY, JSON.stringify(updated))
  } catch (error) {
    throw error
  }
}

async function remove(id: string) {
  try {
    const linkStorage = await get()
    const updated = linkStorage.filter(item => item.id !== id)

    await AsyncStorage.setItem(LINK_STORAGE_KEY, JSON.stringify(updated))
  } catch (error) {
    throw error
  }
}

export const linkStorage = {
  get,
  save,
  remove,
}
