import { Router } from 'express'

import { client } from '../lib'
import { extractOpMeta } from '../lib'
const router = Router()

router.get('/opreturn/:blockheight', async (req, res) => {
  const { blockheight } = req.params
  const blockHash = (await client.getBlockHash(+blockheight))[0]
  const block = (await client.getBlock(blockHash))[0]
  let tx = block.tx[0]
  tx = await client.getRawTransaction(tx)
  res.send(tx)
})

export { router as opReturnRouter }
