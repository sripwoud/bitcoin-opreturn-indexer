import { Router } from 'express'

import { client } from '../lib'
const router = Router()

router.get('/getblock', async (req, res) => {
  const [body, headers] = await client.getBlockchainInformation()
  res.send(body)
})

export { router as getBlockRouter }
