import { FlightRepository } from '../repositories/index.js'
import { AppError, compareTime } from '../utils/index.js'
import { StatusCodes } from 'http-status-codes'

const flightRepository = new FlightRepository()

export async function createFlight(data) {
  try {
    if (compareTime(data.departureTime, data.arrivalTime)) {
      throw new AppError(
        'Departure time must be less than arrival time',
        StatusCodes.BAD_REQUEST
      )
    }

    const flight = await flightRepository.create(data)
    return flight
  } catch (error) {
    if (error instanceof AppError) {
      throw error
    }

    if (
      error.name === 'SequelizeValidationError' ||
      error.name === 'SequelizeForeignKeyConstraintError'
    ) {
      let explanation = error.errors.map((err) => err.message)
      throw new AppError(explanation, StatusCodes.BAD_REQUEST)
    }

    throw new AppError(
      'Cannot create a new Flight object ',
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}
