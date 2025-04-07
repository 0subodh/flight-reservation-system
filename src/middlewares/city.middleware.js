import { StatusCodes } from 'http-status-codes'
import { AppError, error as ErrorResponse } from '../utils/index.js'

export function validateCreateCityRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = 'Something went wrong while creating city'
    ErrorResponse.error = new AppError(
      ['City name not found in the incoming request '],
      StatusCodes.BAD_REQUEST
    )

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  next()
}
