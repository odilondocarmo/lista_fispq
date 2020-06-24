'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('sinonimos', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        produto_id: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sinonimo: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        created_at: {
          type: Sequelize.DATE,
        },
        updated_at: {
          type: Sequelize.DATE,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('sinonimos');
  }
};
