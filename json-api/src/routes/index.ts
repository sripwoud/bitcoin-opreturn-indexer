import { Router } from 'express'

import { rootRouter } from './root'
import { getBlockRouter } from './get-block'
import { opReturnRouter } from './opreturn'

const router = Router()

router.use([rootRouter, getBlockRouter, opReturnRouter])

export { router }
