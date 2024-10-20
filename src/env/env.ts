import { z } from 'zod'

const envSchema = z.object({
  EXPO_PUBLIC_LINK: z.string().min(1),
})

export const env = envSchema.parse(process.env)
