export default {
  async up(queryInterface, Sequelize) {
    // Seed data logic
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'AIRBUS 12',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'BOEING 450',
        capacity: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'AIRBUS 45',
        capacity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airplanes', null, {})
  },
}
