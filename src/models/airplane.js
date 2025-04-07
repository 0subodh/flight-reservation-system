'use strict'
import { Model, DataTypes } from 'sequelize'

export default (sequelize) => {
  class Airplane extends Model {
    static associate(models) {
      // define association here
      Airplane.hasMany(models.Fligths, {
        foreignKey: 'airplaneId',
        onDelete: 'cascade',
      })
      Airplane.belongsTo(models.Airport, {
        foreignKey: 'departureAirportId',
        onDelete: 'cascade',
      })
      Airplane.belongsTo(models.Airport, {
        foreignKey: 'arrivalAirportId',
        onDelete: 'cascade',
      })
    }
  }

  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true,
        },
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          max: 1000,
        },
      },
    },
    {
      sequelize,
      modelName: 'Airplane',
    }
  )

  return Airplane
}
