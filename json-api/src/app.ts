import express from 'express'
import 'express-async-errors'

import { router } from './routes'
import { NotFoundError } from './errors'
import { middlewares, errorHandler, postProcesser } from './middlewares'

const app = express()

app.use([...middlewares, router, postProcesser])

app.all('*', async (req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
