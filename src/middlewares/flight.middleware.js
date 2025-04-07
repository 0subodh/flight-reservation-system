import { StatusCodes } from 'http-status-codes'
import { AppError, error as ErrorResponse } from '../utils/index.js'

export function validateCreateFlightRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = 'Something went wrong while creating flight'
    ErrorResponse.error = new AppError(
      ['Flight Number not found in the incoming request in the correct order'],
      StatusCodes.BAD_REQUEST
    )

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = 'Something went wrong while creating flight'
    ErrorResponse.error = new AppError(
      ['AirplaneId not found in the incoming request in the correct order'],
      StatusCodes.BAD_REQUEST
    )

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = 'Something went wrong while creating flight'
    ErrorResponse.error = new AppError(
      [
        'departureAirportId not found in the incoming request in the correct order',
      ],
      StatusCodes.BAD_REQUEST
    )

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = 'Something went wrong while creating flight'
    ErrorResponse.error = new AppError(
      [
        'arrivalAirportId not found in the incoming request in the correct order',
      ],
      StatusCodes.BAD_REQUEST
    )

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = 'Something went wrong while creating flight'
    ErrorResponse.error = new AppError(
      ['Arrival Time not found in the incoming request in the correct order'],
      StatusCodes.BAD_REQUEST
    )

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.departureTime) {
    ErrorResponse.message = 'Something went wrong while creating flight'
    ErrorResponse.error = new AppError(
      ['Departure Time not found in the incoming request in the correct order'],
      StatusCodes.BAD_REQUEST
    )

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  if (!req.body.price) {
    ErrorResponse.message = 'Something went wrong while creating flight'
    ErrorResponse.error = new AppError(
      ['Price not found in the incoming request in the correct order'],
      StatusCodes.BAD_REQUEST
    )

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }

  if (!req.body.totalSeats) {
    ErrorResponse.message = 'Something went wrong while creating flight'
    ErrorResponse.error = new AppError(
      ['Total Seats not found in the incoming request in the correct order'],
      StatusCodes.BAD_REQUEST
    )

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
  }
  next()
}
