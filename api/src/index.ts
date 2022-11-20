import express from 'express'
import morgan from 'morgan'
import { db } from './database/prismaClient'

const app = express()

app.use(morgan('dev'))

app.get('/', async (req, res) => {
  const allPosts = await db.post.findMany()

  const test = 'Test 777'

  res.json({
    allPosts,
    test,
    message: 'testeeee'
  })
})

const port = Number(process.env.PORT ?? 3333)

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`)
})
