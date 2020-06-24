'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('riscos_fogo', {
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
        acoes_combustao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        comportamento_fogo: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        perigosos_combustao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        extincao_negado: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        inflamabilidade_ar: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        ponto_fulgor: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        temp_ignicao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        taxa_queima: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        taxa_evaporacao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        nfpa: {
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
      return queryInterface.dropTable('riscos_fogo');
  }
};
