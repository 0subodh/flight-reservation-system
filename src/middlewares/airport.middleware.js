import { StatusCodes } from 'http-status-codes'
import { AppError, error as ErrorResponse } from '../utils/index.js'

export function validateCreateAirportRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = 'Something went wrong while creating airplane'
    ErrorResponse.error = new AppError(
      ['Model Number not found in the incoming request in the correct order'],
      StatusCodes.BAD_REQUEST
    )

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.code) {
    ErrorResponse.message = 'Something went wrong while creating airplane'
    ErrorResponse.error = new AppError(
      ['Code not found in the incoming request in the correct order'],
      StatusCodes.BAD_REQUEST
    )

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.city_id) {
    ErrorResponse.message = 'Something went wrong while creating airplane'
    ErrorResponse.error = new AppError(
      ['City ID not found in the incoming request in the correct order'],
      StatusCodes.BAD_REQUEST
    )

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  next()
}
