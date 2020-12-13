import { Request, Response, NextFunction } from 'express'

export const decode = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req
  res.send(Object.assign(body, { data: 'test' }))

  next()
}
