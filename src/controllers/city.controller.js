import { StatusCodes } from 'http-status-codes'
import {
  createCity as createCityService,
  getAllCities as getAllCitiesService,
  getCity as getCityService,
  destroyCity as destroyCityService,
  updateCity as updateCityService,
} from '../services/index.js'
import {
  error as ErrorResponse,
  success as SuccessResponse,
} from '../utils/index.js'

/**
 * POST :/city
 * req-body {name: 'Kathmandu'}
 */
export async function createCity(req, res) {
  try {
    const city = await createCityService({
      name: req.body.name,
    })

    SuccessResponse.data = city
    SuccessResponse.message = 'City created successfully'

    // prettier-ignore
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while creating city'

    // prettier-ignore
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

export async function getAllCities(req, res) {
  try {
    const cities = await getAllCitiesService()

    SuccessResponse.data = cities
    SuccessResponse.message = 'Cities fetched successfully'

    // prettier-ignore
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while fetching cities'

    // prettier-ignore
    return res
      .status(error.statusCode)
      .json(ErrorResponse)
  }
}

export async function getCity(req, res) {
  try {
    const city = await getCityService(req.params.id)

    SuccessResponse.data = city
    SuccessResponse.message = 'City fetched successfully'

    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while fetching city'

    // prettier-ignore
    return res
      .status(error.statusCode)
      .json(ErrorResponse)
  }
}

export async function destroyCity(req, res) {
  try {
    const response = await destroyCityService(req.params.id)

    SuccessResponse.data = response
    SuccessResponse.message = 'City deleted successfully'

    // prettier-ignore
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while deleting city'

    // prettier-ignore
    return res
    .status(error.statusCode)
    .json(ErrorResponse)
  }
}

export async function updateCity(req, res) {
  try {
    const response = await updateCityService(req.params.id, req.body)

    SuccessResponse.data = response
    SuccessResponse.message = 'City updated successfully'

    // prettier-ignore
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while updating city'

    // prettier-ignore
    return res
    .status(error.statusCode)
    .json(ErrorResponse)
  }
}
