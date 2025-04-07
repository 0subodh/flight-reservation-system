import express from 'express'
import { createFlight } from '../../controllers/index.js'
import { validateCreateFlightRequest } from '../../middlewares/index.js'

const router = express.Router()

// POST /api/v1/flights
router.post('/', validateCreateFlightRequest, createFlight)

export default router
