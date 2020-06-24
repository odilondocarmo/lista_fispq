import Sequelize, { Model } from 'sequelize';

class Informacao_ecotoxicologicas extends Model {
  static init(sequelize){
    super.init({
      produto_id: Sequelize.STRING,
      toxicidade_limites: Sequelize.STRING,
      toxicidade_verterbrados: Sequelize.STRING,
      toxicidade_rato: Sequelize.STRING,
      toxicidade_camundongo: Sequelize.STRING,
      toxicidade_peixes: Sequelize.STRING,
      toxicidade_crustaceos: Sequelize.STRING,
      toxicidade_algas: Sequelize.STRING,
      toxicidade_bacterias: Sequelize.STRING,
      toxicidade_mutagenicidade: Sequelize.STRING,
      toxicidade_outros: Sequelize.STRING,
      Intoxicacao_humana_tipo_contato: Sequelize.STRING,
      Intoxicacao_humana_sindrome: Sequelize.STRING,
      Intoxicacao_humana_tratamento: Sequelize.STRING,
    },{
      sequelize
    });
  }
}

export default Informacao_ecotoxicologicas;