import express from 'express'
import { createFlight, getAllFlights } from '../../controllers/index.js'
import { validateCreateFlightRequest } from '../../middlewares/index.js'

const router = express.Router()

// POST /api/v1/flights
router.post('/', validateCreateFlightRequest, createFlight)

// GET /api/v1/flights?trips=KTM-CHI
router.get('/', getAllFlights)

export default router
