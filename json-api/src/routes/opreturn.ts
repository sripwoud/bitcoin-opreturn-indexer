import { Router, Response, Request, NextFunction } from 'express'

import { OpReturn } from '../../../db/src/models'
import { NotFoundError } from '../errors'
import { range } from '../lib'

const router = Router()

router.get(
  '/opreturn/blockheight/:blockHeight',
  async (req: Request, _, next) => {
    let { blockHeight } = req.params
    const opreturns = await OpReturn.findAll({
      where: { blockHeight: +blockHeight }
    })

    if (!opreturns) throw new NotFoundError()

    req.body = opreturns
    next()
  }
)

router.post(
  '/opreturn/blockheight',
  async (req: Request, _, next: NextFunction) => {
    const { from, to } = req.body

    const opreturns = await OpReturn.findAll({
      where: { blockHeight: range(from, to, 1) }
    })

    if (!opreturns) throw new NotFoundError()

    req.body = opreturns
    next()
  }
)

router.get('/opreturn/blockhash/:blockHash', async (req, _, next) => {
  let { blockHash } = req.params
  const opreturns = await OpReturn.findAll({
    where: { blockHash }
  })

  if (!opreturns) throw new NotFoundError()

  req.body = opreturns
  next()
})

router.get('/opreturn/data/:data', async (req, _, next) => {
  let { data } = req.params
  const opreturns = await OpReturn.findAll({
    where: { data }
  })

  if (!opreturns) throw new NotFoundError()

  req.body = opreturns
  next()
})

export { router as opReturnRouter }
