import { AirplaneRepository } from '../repositories/index.js'
import { AppError } from '../utils/index.js'
import { StatusCodes } from 'http-status-codes'

const airplaneRepository = new AirplaneRepository()

export async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data)
    return airplane
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      let explanation = error.errors.map((err) => err.message)
      throw new AppError(explanation, StatusCodes.BAD_REQUEST)
    }
    throw new AppError(
      'Cannot create a new Airplane object ',
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}

export async function getAllAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll()
    return airplanes
  } catch (error) {
    throw new AppError(
      'Cannot fetch airplanes',
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}
