import express from 'express'
import {
  createAirport,
  getAllAirports,
  getAirport,
  destroyAirport,
  updateAirport,
} from '../../controllers/index.js'
import { validateCreateAirportRequest } from '../../middlewares/index.js'

const router = express.Router()

// POST /api/v1/airports
router.post('/', validateCreateAirportRequest, createAirport)

// GET /api/v1/airports
router.get('/', getAllAirports)

// GET /api/v1/airports/:id
router.get('/:id', getAirport)

// DELETE /api/v1/airports/:id
router.delete('/:id', destroyAirport)

// UPDATE /api/v1/airports/:id
router.patch('/:id', updateAirport)

export default router
