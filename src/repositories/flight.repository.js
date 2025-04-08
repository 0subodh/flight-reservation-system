import { Sequelize } from 'sequelize'
import { CrudRepository } from './crud.repository.js'
import db from '../models/index.js'

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
          as: 'departureAirport',
          on: {
            col1: Sequelize.where(
              Sequelize.col('Flight.arrivalAirportId'),
              '=',
              Sequelize.col('arrivalAirportId.code')
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
}
