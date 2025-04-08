'use strict'

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Seats', {
      type: 'foreign key',
      fields: ['airplaneId'],
      name: 'seat-airplane-fkey-constraint',
      references: {
        table: 'Airplanes',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'Seats',
      'seat-airplane-fkey-constraint'
    )
  },
}
