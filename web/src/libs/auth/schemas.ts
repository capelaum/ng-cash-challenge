import { z } from 'zod'

export const authSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, 'Nome de usuário deve ter no mínimo 3 caracteres')
    .max(255, 'Nome de usuário deve ter no máximo 255 caracteres.'),
  password: z
    .string()
    .trim()
    .regex(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
      'Senha deve ter no mínimo 8 caracteres, 1 letra maiuscula e 1 número.'
    )
    .max(100, 'Senha deve ter no máximo 100 caracteres.'),
})

export type AuthFormData = z.infer<typeof authSchema>
