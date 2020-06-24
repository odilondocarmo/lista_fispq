'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('informacao_ecotoxicologicas', {
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
        toxicidade_limites: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        toxicidade_verterbrados: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        toxicidade_rato: {
          type: Sequelize.STRING,
          allowNull: true,
        },
          toxicidade_camundongo: {
          type: Sequelize.STRING,
          allowNull: true,
        },
         toxicidade_peixes: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        toxicidade_crustaceos: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        toxicidade_algas: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        toxicidade_bacterias: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        toxicidade_mutagenicidade: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        toxicidade_outros: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        Intoxicacao_humana_tipo_contato: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        Intoxicacao_humana_sindrome: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        Intoxicacao_humana_tratamento: {
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
      return queryInterface.dropTable('informacao_ecotoxicologicas');
  }
};
