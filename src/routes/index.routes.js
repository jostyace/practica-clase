import { Router } from 'express'
import { indexController } from '../controllers/index.controllers'

const router = Router()

router.get('/ping', indexController)

export default router
