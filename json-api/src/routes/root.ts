import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.send('Exodus Bitcoin OP_RETURN indexer'))

export { router as rootRouter }
