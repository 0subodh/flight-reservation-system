import { StatusCodes } from 'http-status-codes'
import {
  createAirplane as createAirplaneService,
  getAllAirplanes as getAllAirplanesService,
  getAirplane as getAirplaneService,
  destroyAirplane as destroyAirplaneService,
} from '../services/index.js'
import {
  error as ErrorResponse,
  success as SuccessResponse,
} from '../utils/index.js'

/**
 * POST :/airplanes
 * req-body {modelNumber: 'airbus23', capacity: 100}
 */
export async function createAirplane(req, res) {
  try {
    const airplane = await createAirplaneService({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    })

    SuccessResponse.data = airplane
    SuccessResponse.message = 'Airplane created successfully'

    // prettier-ignore
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while creating airplane'

    // prettier-ignore
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

export async function getAllAirplanes(req, res) {
  try {
    const airplanes = await getAllAirplanesService()

    SuccessResponse.data = airplanes
    SuccessResponse.message = 'Airplanes fetched successfully'

    // prettier-ignore
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while fetching airplanes'

    // prettier-ignore
    return res
      .status(error.statusCode)
      .json(ErrorResponse)
  }
}

export async function getAirplane(req, res) {
  try {
    const airplane = await getAirplaneService(req.params.id)

    SuccessResponse.data = airplane
    SuccessResponse.message = 'Airplane fetched successfully'

    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while fetching airplane'

    // prettier-ignore
    return res
      .status(error.statusCode)
      .json(ErrorResponse)
  }
}

export async function destroyAirplane(req, res) {
  try {
    const response = await destroyAirplaneService(req.params.id)

    SuccessResponse.data = response
    SuccessResponse.message = 'Airplane deleted successfully'

    // prettier-ignore
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while deleting airplane'

    // prettier-ignore
    return res
    .status(error.statusCode)
    .json(ErrorResponse)
  }
}
