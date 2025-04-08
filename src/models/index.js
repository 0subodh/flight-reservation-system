import { Sequelize } from 'sequelize'
import AirplaneModel from './airplane.js'
import CityModel from './city.js'
import AirportModel from './airport.js'
import FlightModel from './flight.js'
import SeatModel from './seat.js'

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    host: 'localhost',
  }
)

const Airplane = AirplaneModel(sequelize)
const City = CityModel(sequelize)
const Airport = AirportModel(sequelize)
const Flight = FlightModel(sequelize)
const Seat = SeatModel(sequelize)

// CALL the function to initialize the model

const db = {
  sequelize,
  Sequelize,
  Airplane, // export the actual model
  City,
  Airport,
  Flight,
  Seat,
}

Object.keys(db).forEach((modelName) => {
  const model = db[modelName]
  if (model.associate) {
    model.associate(db)
  }
})

export default db
