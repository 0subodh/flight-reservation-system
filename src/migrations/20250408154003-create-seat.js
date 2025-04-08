'use strict'
import { SEAT_TYPE } from '../utils/common/enums.js'

const { BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY } = SEAT_TYPE

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      row: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      col: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'Airplane',
        //   key: 'id',
        // },
        // onDelete: 'cascade',
      },

      type: {
        type: Sequelize.ENUM,
        values: [BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY],
        defaultValue: ECONOMY,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats')
  },
}
