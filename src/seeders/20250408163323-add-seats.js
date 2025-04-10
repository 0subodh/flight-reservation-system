// npx sequelize seed:generate --name add-seats
// npx sequelize db:seed --seed 20250408163323-add-seats.js

export default {
  async up(queryInterface, Sequelize) {
    // Seed data logic
    await queryInterface.bulkInsert('Seats', [
      {
        row: 1,
        col: 'A',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        row: 1,
        col: 'B',
        airplaneId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        row: 2,
        col: 'C',
        airplaneId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        row: 2,
        col: 'D',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        row: 3,
        col: 'E',
        airplaneId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Seats', null, {})
  },
}
