import express from 'express'
import {
  createFlight,
  getAllFlights,
  getFlight,
  updateSeats,
} from '../../controllers/index.js'
import {
  validateCreateFlightRequest,
  validateUpdateSeatsRequest,
} from '../../middlewares/index.js'

const router = express.Router()

// POST /api/v1/flights
router.post('/', validateCreateFlightRequest, createFlight)

// GET /api/v1/flights?trips=KTM-CHI
router.get('/', getAllFlights)

// GET /api/v1/flights/:id
router.get('/:id', getFlight)

// PATCH /api/v1/flights/:id/seats
router.patch('/:id/seats', validateUpdateSeatsRequest, updateSeats)

export default router
