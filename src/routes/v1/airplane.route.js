import express from 'express'
import {
  createAirplane,
  getAllAirplanes,
  getAirplane,
} from '../../controllers/index.js'
import { validateCreateRequest } from '../../middlewares/index.js'

const router = express.Router()

// POST /api/v1/airplanes
router.post('/', validateCreateRequest, createAirplane)

// GET /api/v1/airplanes
router.get('/', getAllAirplanes)

// GET /api/v1/airplanes/:id
router.get('/:id', getAirplane)

export default router
