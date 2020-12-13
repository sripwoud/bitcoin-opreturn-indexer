import { Request, Response, NextFunction } from 'express'
import { OpReturnAttrs } from '../../../db/src/models'

interface OpReturn extends OpReturnAttrs {
  createdAt: string
  updatedAt: string
  data_decoded?: string
}

const decodeHex = (opreturn: OpReturn) => {
  const {
    id,
    data,
    blockHash,
    blockHeight,
    txHash,
    createdAt,
    updatedAt
  } = opreturn
  const buf = Buffer.from(opreturn.data, 'hex')
  const data_decoded = buf.toString('utf8')
  return {
    id,
    blockHash,
    blockHeight,
    txHash,
    data,
    data_decoded,
    createdAt,
    updatedAt
  }
}

const postProcesser = (req: Request, res: Response) => {
  const { body } = req
  res.send(body.map(decodeHex))
}

export { postProcesser }
