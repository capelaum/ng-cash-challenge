import { PrismaClient } from '@prisma/client'
import { genSalt, hash } from 'bcrypt'

export const db = new PrismaClient({
  log: ['query', 'info', 'warn', 'error']
})

async function hashPassword(password: string) {
  const salt = await genSalt(10)
  const hashedPassword = await hash(password, salt)

  return hashedPassword
}

async function main() {
  if ((await db.user.count()) === 0) {
    for (let i = 1; i <= 10; i++) {
      await db.user.create({
        data: {
          username: `user_${i}`,
          password: await hashPassword('password'),
          account: {
            create: {
              balance: 100
            }
          }
        }
      })
    }
  }
}

main()
