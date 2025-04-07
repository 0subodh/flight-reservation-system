import { StatusCodes } from 'http-status-codes'
import {
  createAirport as createAirportService,
  getAllAirports as getAllAirportsService,
  getAirport as getAirportService,
  destroyAirport as destroyAirportService,
  updateAirport as updateAirportService,
} from '../services/index.js'

import {
  error as ErrorResponse,
  success as SuccessResponse,
} from '../utils/index.js'

/**
 * POST :/airplanes
 * req-body {name: '', code: '', address: '', city_id: ''}
 */
export async function createAirport(req, res) {
  try {
    const airport = await createAirportService({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      city_id: req.body.city_id,
    })

    SuccessResponse.data = airport
    SuccessResponse.message = 'Airport created successfully'

    // prettier-ignore
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while creating airport'

    // prettier-ignore
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

export async function getAllAirports(req, res) {
  try {
    const airports = await getAllAirportsService()

    SuccessResponse.data = airports
    SuccessResponse.message = 'Airports fetched successfully'

    // prettier-ignore
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while fetching airports'

    // prettier-ignore
    return res
      .status(error.statusCode)
      .json(ErrorResponse)
  }
}

export async function getAirport(req, res) {
  try {
    const airport = await getAirportService(req.params.id)

    SuccessResponse.data = airport
    SuccessResponse.message = 'Airport fetched successfully'

    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while fetching airport'

    // prettier-ignore
    return res
      .status(error.statusCode)
      .json(ErrorResponse)
  }
}

export async function destroyAirport(req, res) {
  try {
    const response = await destroyAirportService(req.params.id)

    SuccessResponse.data = response
    SuccessResponse.message = 'Airport deleted successfully'

    // prettier-ignore
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while deleting airport'

    // prettier-ignore
    return res
    .status(error.statusCode)
    .json(ErrorResponse)
  }
}

export async function updateAirport(req, res) {
  try {
    const response = await updateAirportService(req.params.id, req.body)

    SuccessResponse.data = response
    SuccessResponse.message = 'Airport updated successfully'

    // prettier-ignore
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while updating airport'

    // prettier-ignore
    return res
    .status(error.statusCode)
    .json(ErrorResponse)
  }
}
