'use strict'
import { Model, DataTypes } from 'sequelize'
import { SEAT_TYPE } from '../utils/common/enums.js'

const { BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY } = SEAT_TYPE

export default (sequelize) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seat.belongsTo(models.Airplane, {
        foreignKey: 'airplaneId',
      })
    }
  }
  Seat.init(
    {
      row: { type: DataTypes.INTEGER, allowNull: false },
      col: { type: DataTypes.STRING, allowNull: false },
      airplaneId: { type: DataTypes.INTEGER, allowNull: false },
      type: {
        type: DataTypes.ENUM,
        values: [BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY],
        defaultValue: ECONOMY,
      },
    },
    {
      sequelize,
      modelName: 'Seat',
    }
  )
  return Seat
}
