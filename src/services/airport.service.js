import { AirportRepository } from '../repositories/index.js'
import { AppError } from '../utils/index.js'
import { StatusCodes } from 'http-status-codes'

const airportRepository = new AirportRepository()

export async function createAirport(data) {
  try {
    const airport = await airportRepository.create(data)
    return airport
  } catch (error) {
    console.log(error)
    if (error.name === 'SequelizeValidationError') {
      let explanation = error.errors.map((err) => err.message)
      throw new AppError(explanation, StatusCodes.BAD_REQUEST)
    }
    throw new AppError(
      'Cannot create a new Airport object ',
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}

export async function getAllAirports() {
  try {
    const airports = await airportRepository.getAll()
    return airports
  } catch (error) {
    throw new AppError(
      'Cannot fetch airports',
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}

export async function getAirport(id) {
  try {
    const airport = await airportRepository.get(id)

    return airport
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        'The airport you requested does not exist',
        StatusCodes.NOT_FOUND
      )
    }
    throw new AppError(
      'Cannot fetch airplane',
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}

export async function destroyAirport(id) {
  try {
    const response = await airportRepository.destroy(id)
    return response
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        'The airport you requested to delete is not present ',
        StatusCodes.NOT_FOUND
      )
    }
    throw new AppError(
      'Cannot delete airplane',
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}

export async function updateAirport(id, data) {
  try {
    const response = await airportRepository.update(id, data)
    return response
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        'The airport you requested to update is not present ',
        StatusCodes.NOT_FOUND
      )
    }
    throw new AppError(
      'Cannot update airport',
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}
