import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient({
  log: ['query', 'info', 'warn', 'error']
})

async function seedPosts() {
  if ((await db.post.count()) === 0) {
    await db.post.createMany({
      data: [
        {
          title: 'Hello World',
          slug: 'hello-world',
          content: 'This is my first post',
          published: true
        },
        {
          title: 'Hello World 2',
          slug: 'hello-world-2',
          published: false
        }
      ]
    })
  }
}

seedPosts()
