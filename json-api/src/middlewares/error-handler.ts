import { Request, Response, NextFunction } from 'express'

import { CustomError } from '../errors'

export const errorHandler = (
  err: Error,
  r: Request,
  res: Response,
  n: NextFunction
) => {
  if (err instanceof CustomError)
    return res.status(err.statusCode).send(err.serializeErrors())

  console.error(err)
  res.status(400).send({ errors: [{ message: 'Something went wrong' }] })
}
