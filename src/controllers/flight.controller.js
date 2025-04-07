import { StatusCodes } from 'http-status-codes'
import {
  createFlight as createFlightService,
  getAllFlights as getAllFlightsService,
} from '../services/index.js'

import {
  error as ErrorResponse,
  success as SuccessResponse,
} from '../utils/index.js'
import airplane from '../models/airplane.js'

/**
 * POST :/airports
 * req-body {
 * flightNumber: ''
 * airplaneId: 'UK 200',
 * departureAirportId: 10,
 * arrivalAirportId: 20,
 * arrivalTime: '11:00:00',
 * departureTime: '9:00:00 ',
 * price: 2000,
 * boardingGate: '13B',
 * toatalSeats: 200
 * }
 */
export async function createFlight(req, res) {
  try {
    const flight = await createFlightService({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate, // can be null
      totalSeats: req.body.totalSeats,
    })

    SuccessResponse.data = flight
    SuccessResponse.message = 'Flight created successfully'

    // prettier-ignore
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while creating flight'

    // prettier-ignore
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

export async function getAllFlights(req, res) {
  try {
    const flights = await getAllFlightsService(req.query)
    SuccessResponse.data = flights
    SuccessResponse.message = 'Flights fetched successfully'

    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.error = error
    ErrorResponse.message = 'Something went wrong while creating flight'

    // prettier-ignore
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse);
  }
}
