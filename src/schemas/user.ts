import { z } from 'zod'

const UserSchema = z.object({
    username: z.string()
})

type User = z.infer<typeof UserSchema>

export { UserSchema }
export type { User }
