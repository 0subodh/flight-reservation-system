import express from 'express'
import {
  createAirplane,
  getAllAirplanes,
  getAirplane,
  destroyAirplane,
} from '../../controllers/index.js'
import { validateCreateRequest } from '../../middlewares/index.js'

const router = express.Router()

// POST /api/v1/airplanes
router.post('/', validateCreateRequest, createAirplane)

// GET /api/v1/airplanes
router.get('/', getAllAirplanes)

// GET /api/v1/airplanes/:id
router.get('/:id', getAirplane)

// DELETE /api/v1/airplanes/:id
router.delete('/:id', destroyAirplane)

export default router
