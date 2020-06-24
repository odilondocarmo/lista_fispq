'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('identificacaos', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        produto_id: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        numero_onu: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        numero_risco: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        classe_sub: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        aparencia: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        formula: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        familia: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        fabricantes: {
          type: Sequelize.TEXT,
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
      return queryInterface.dropTable('identificacaos');
  }
};
