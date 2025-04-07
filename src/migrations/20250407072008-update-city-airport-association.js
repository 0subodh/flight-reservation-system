'use strict'

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports', {
      type: 'foreign key',
      fields: ['city_id'],
      name: 'city-fkey-constraint',
      references: {
        table: 'Cities',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports', 'city-fkey-constraint')
  },
}
