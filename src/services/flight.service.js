import { FlightRepository } from '../repositories/index.js'
import { AppError, compareTime } from '../utils/index.js'
import { StatusCodes } from 'http-status-codes'
import { Op } from 'sequelize'

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

export async function getAllFlights(query) {
  // trips=KTM-CHI
  let customFilter = {}
  let sortFilter = []

  if (query.trips) {
    const [departureAirportId, arrivalAirportId] = query.trips.split('-')
    customFilter.departureAirportId = departureAirportId
    customFilter.arrivalAirportId = arrivalAirportId

    // TODO: Add a check these two values are different
  }

  // price=2000-5000
  if (query.price) {
    const [minPrice, maxPrice] = query.price.split('-')
    customFilter.price = {
      [Op.between]: [
        parseInt(minPrice),
        parseInt(maxPrice) === undefined ? 2000 : parseInt(maxPrice),
      ],
    }
  }

  if (query.travellers) {
    customFilter.totalSeats = {
      [Op.gte]: parseInt(query.travellers),
    }
  }

  if (query.tripDate) {
    customFilter.departureTime = {
      [Op.between]: [query.tripDate, query.tripDate + ' 23:59:00'],
    }
  }

  // &sort=departureTime_ASC
  if (query.sort) {
    const params = query.sort.split(',')
    sortFilter = params.map((param) => param.split('_'))
    console.log(sortFilter)
  }

  try {
    console.log('flight service')
    const flights = await flightRepository.getAllFlights(
      customFilter,
      sortFilter
    )
    return flights
  } catch (error) {
    throw new AppError(
      'Cannot fetch data of all flights ',
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}
