'use strict'
import { Model, DataTypes } from 'sequelize'
export default (sequelize) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flight.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
        as: 'airplaneDetail',
      })
      Flight.belongsTo(models.Airport, {
        foreignKey: 'departureAirportId',
        as: 'departureAirport',
      })
      Flight.belongsTo(models.Airport, {
        foreignKey: 'arrivalAirportId',
        as: 'arrivalAirport',
      })
    }
  }
  Flight.init(
    {
      flightNumber: { type: DataTypes.STRING, allowNull: false },
      airplaneId: { type: DataTypes.INTEGER, allowNull: false },
      departureAirportId: { type: DataTypes.STRING, allowNull: false },
      arrivalAirportId: { type: DataTypes.STRING, allowNull: false },
      arrivalTime: { type: DataTypes.DATE, allowNull: false },
      departureTime: { type: DataTypes.DATE, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      boardingGate: { type: DataTypes.STRING, allowNull: true },
      totalSeats: { type: DataTypes.INTEGER, allowNull: false }, // total remaining seats
    },
    {
      sequelize,
      modelName: 'Flight',
    }
  )
  return Flight
}
