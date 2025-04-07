import express from 'express'
import {createCity, getAllCities, getCity, destroyCity, updateCity} from '../../controllers/index.js'
import { validateCreateCityRequest } from '../../middlewares/index.js'


const router = express.Router()

// POST /api/v1/cities
router.post('/', validateCreateCityRequest, createCity)

// GET /api/v1/cities
router.get('/', getAllCities)

// GET /api/v1/cities/:id
router.get('/:id', getCity)

// DELETE /api/v1/cities/:id
router.delete('/:id', destroyCity)

// UPDATE /api/v1/cities/:id
router.patch('/:id', updateCity)

export default router
