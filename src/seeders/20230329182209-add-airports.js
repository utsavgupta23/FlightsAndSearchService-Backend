'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
         name:'Kempegowda International Airport',
         cityId:10,
         createdAt:new Date(),
         updatedAt:new Date()
      },
      {
        name:'Mysore International Airport',
        cityId:10,
        createdAt:new Date(),
        updatedAt:new Date()
     },
     {
      name:'Prayagraj International Airport',
      cityId:8,
      createdAt:new Date(),
      updatedAt:new Date()
   },
   {
    name:'Indore International Airport',
    cityId:9,
    createdAt:new Date(),
    updatedAt:new Date()
   }
    


    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
