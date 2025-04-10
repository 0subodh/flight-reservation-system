import { Sequelize } from 'sequelize'
import { CrudRepository } from './crud.repository.js'
import db from '../models/index.js'
import { addRowLockOnFlights } from './queries.js'

export class FlightRepository extends CrudRepository {
  constructor() {
    super(db.Flight)
  }

  async getAllFlights(filter, sort) {
    const response = await db.Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: db.Airplane,
          required: true,
          as: 'airplaneDetail',
        },
        {
          model: db.Airport,
          required: true,
          as: 'departureAirport',
          on: {
            col1: Sequelize.where(
              Sequelize.col('Flight.departureAirportId'),
              '=',
              Sequelize.col('departureAirport.code')
            ),
          },
          include: {
            model: db.City,
            required: true,
          },
        },
        {
          model: db.Airport,
          required: true,
          as: 'arrivalAirport',
          on: {
            col1: Sequelize.where(
              Sequelize.col('Flight.arrivalAirportId'),
              '=',
              Sequelize.col('arrivalAirport.code')
            ),
          },
          include: {
            model: db.City,
            required: true,
          },
        },
      ],
    })
    return response
  }

  async updateRemainingSeats(flightId, seats, decrease = true) {
    // Implemnets row level locking
    await db.sequelize.query(addRowLockOnFlights(flightId))
    const flight = await db.Flight.findByPk(flightId)
    console.log(JSON.parse(decrease))
    if (JSON.parse(decrease)) {
      const response = await flight.decrement('totalSeats', {
        by: seats,
      })
      return response
    } else {
      const response = await flight.increment('totalSeats', { by: seats })
      return response
    }
  }
}
