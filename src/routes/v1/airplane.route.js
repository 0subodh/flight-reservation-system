import express from 'express'
import { createAirplane, getAllAirplanes } from '../../controllers/index.js'
import { validateCreateRequest } from '../../middlewares/index.js'

const router = express.Router()

// POST /api/v1/airplanes
router.post('/', validateCreateRequest, createAirplane)

// GET /api/v1/airplanes
router.get('/', getAllAirplanes)

export default router
