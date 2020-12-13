import { app } from './app'

const PORT = 3001

const start = async () => {
  app.listen(PORT, () => console.log(`Server 👂 on port ${PORT}`))
}

start()
