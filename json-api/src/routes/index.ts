import { Router } from 'express'

import { rootRouter } from './root'
import { opReturnRouter } from './opreturn'

const router = Router()

router.use([rootRouter, opReturnRouter])

export { router }
