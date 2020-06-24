'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('medidas_seguranca', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        produto_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        medidas_prev: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        epi: {
          type: Sequelize.STRING,
          allowNull: true,
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
      return queryInterface.dropTable('medidas_seguranca');
  }
};
