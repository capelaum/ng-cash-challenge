import { z } from 'zod'

export const createTransactionSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, 'Nome de usuário deve ter no mínimo 3 caracteres')
    .max(255, 'Nome de usuário deve ter no máximo 255 caracteres.'),
  value: z.preprocess((input) => {
    const processed = z
      .string()
      // regex to accept decimal numbers with 2 decimal places
      .regex(/^[0-9]*(\.[0-9]{0,2})?$/)
      .transform(Number)
      .safeParse(input)
    return processed.success ? processed.data : input
  }, z.number().min(1, 'Valor deve ser maior que 0').max(1000000, 'Valor deve ser menor que 1.000.000')),
})

export type CreateTransactionFormData = z.infer<typeof createTransactionSchema>
