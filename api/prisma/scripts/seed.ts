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

function generateRandomUsername() {
  const randomUsername = Math.random().toString(36).substring(7)

  return randomUsername
}

async function main() {
  if ((await db.user.count()) === 0) {
    for (let i = 0; i < 10; i++) {
      const createdUser = await db.user.create({
        data: {
          username: generateRandomUsername(),
          password: await hashPassword('password')
        }
      })

      const account = await db.account.create({
        data: {
          balance: 100
        }
      })

      await db.user.update({
        where: { id: createdUser.id },
        data: {
          accountId: account.id
        }
      })
    }
  }
}

main()
