'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('dados_gerais', {
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
         temperatura_armazenamento: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        ventilação_transporte: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        estabilidade_transporte: {
          type: Sequelize.STRING,
          allowNull: true,
        },
          usos: {
          type: Sequelize.STRING,
          allowNull: true,
        },
         grau_pureza: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        radioatividade: {
          type: Sequelize.STRING,
          allowNull: true,
        },
       metodo_coleta: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        nas_fogo: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        nas_saude: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        nas_policaoagua: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        nas_realividade: {
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
      return queryInterface.dropTable('dados_gerais ');
  }
};
