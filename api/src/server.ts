import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import morgan from 'morgan'
import { routes } from 'routes'
import { AppError } from 'shared/errors/AppError'

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use(cors())

app.use('/api', routes)

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message
      })
    }

    return res.status(500).json({
      status: 'error',
      message: `Internal server error - ${error.message}`
    })
  }
)

const port = Number(process.env.PORT ?? 3333)

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`)
})
