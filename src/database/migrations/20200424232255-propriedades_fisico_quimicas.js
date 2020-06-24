'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('fisico_quimicas', {
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
        peso_molecular: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        ponto_ebulicao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        ponto_fusao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        temp_critica: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        pressao_critica: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        densidade_vapor: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        densidade_ambiente: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        pressao_vapor: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        calor_latente: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        calor_combustao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        viscosidade: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        solubilidade_agua: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        ph: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        reatividade_agua: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        reatividade_comuns: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        reatividade_outros: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        polimerizacao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        degradabilidade: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        potencial_concentracao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        dbo: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        neutralizacao: {
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
      return queryInterface.dropTable('fisico_quimicas');
  }
};
