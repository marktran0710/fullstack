"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        //   email: DataTypes.STRING,
        // password: DataTypes.STRING,
        // firstName: DataTypes.STRING,
        // lastName: DataTypes.STRING,
        // image: DataTypes.STRING,
        // address: DataTypes.STRING,
        // gender: DataTypes.BOOLEAN,
        // roleid: DataTypes.STRING,
        address: "abc",
        gender: 1,
        password: "123",
        image: "abc.jpeg",
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        roleId: "R1",
        phoneNumber: "12345",
        positionId: "doctor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
