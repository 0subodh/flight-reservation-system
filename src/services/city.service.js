import { CityRepository } from '../repositories/index.js'
import { AppError } from '../utils/index.js'
import { StatusCodes } from 'http-status-codes'

const cityRepository = new CityRepository()

export async function createCity(data) {
  try {
    const city = await cityRepository.create(data)
    return city
  } catch (error) {
    if (
      error.name === 'SequelizeValidationError' ||
      error.name === 'SequelizeUniqueConstraintError'
    ) {
      let explanation = error.errors.map((err) => err.message)
      throw new AppError(explanation, StatusCodes.BAD_REQUEST)
    }
    throw new AppError(
      'Cannot create a new City object ',
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}

export async function getAllCities() {
  try {
    const cities = await cityRepository.getAll()
    return cities
  } catch (error) {
    throw new AppError('Cannot fetch cities', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

export async function getCity(id) {
  try {
    const city = await cityRepository.get(id)

    return city
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        'The city you requested does not exist',
        StatusCodes.NOT_FOUND
      )
    }
    throw new AppError('Cannot fetch city', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

export async function destroyCity(id) {
  try {
    const response = await cityRepository.destroy(id)
    return response
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        'The city you requested to delete is not present ',
        StatusCodes.NOT_FOUND
      )
    }
    throw new AppError('Cannot delete city', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

export async function updateCity(id, data) {
  try {
    const response = await cityRepository.update(id, data)
    return response
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        'The city you requested to update is not present ',
        StatusCodes.NOT_FOUND
      )
    }
    throw new AppError('Cannot update city', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}
