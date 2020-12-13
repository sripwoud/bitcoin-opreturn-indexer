import { Router } from 'express'

import { OpReturn } from '../../../db/src/models'
import { NotFoundError } from '../errors'

const router = Router()

router.get('/opreturn/blockheight/:blockHeight', async (req, res) => {
  let { blockHeight } = req.params
  const opreturn = await OpReturn.findAll({
    where: { blockHeight: +blockHeight }
  })

  if (!opreturn) throw new NotFoundError()

  res.status(200).send(opreturn)
})

router.get('/opreturn/blockhash/:blockHash', async (req, res) => {
  let { blockHash } = req.params
  const opreturn = await OpReturn.findAll({
    where: { blockHash }
  })

  if (!opreturn) throw new NotFoundError()

  res.status(200).send(opreturn)
})

router.get('/opreturn/data/:data', async (req, res) => {
  let { data } = req.params
  const opreturn = await OpReturn.findAll({
    where: { data }
  })

  if (!opreturn) throw new NotFoundError()

  res.status(200).send(opreturn)
})

export { router as opReturnRouter }
