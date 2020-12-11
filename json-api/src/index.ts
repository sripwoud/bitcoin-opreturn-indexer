require('dotenv').config()
import { app } from './app'

const start = async () => {
  app.listen(3000, () => console.log(`Server 👂 on port 3000`))
}

start()
