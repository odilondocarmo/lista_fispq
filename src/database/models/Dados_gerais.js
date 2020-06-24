import Sequelize, { Model } from 'sequelize';

class Dados_gerais extends Model {
  static init(sequelize){
    super.init({
      produto_id: Sequelize.STRING,
      temperatura_armazenamento: Sequelize.STRING,
      ventilação_transporte: Sequelize.STRING,
      estabilidade_transporte: Sequelize.STRING,
      usos: Sequelize.STRING,
      grau_pureza: Sequelize.STRING,
      radioatividade: Sequelize.STRING,
      metodo_coleta: Sequelize.STRING,
      nas_fogo: Sequelize.STRING,
      nas_saude: Sequelize.STRING,
      nas_policaoagua: Sequelize.STRING,
      nas_realividade: Sequelize.STRING,
    },{
      sequelize
    });
  }
}

export default Dados_gerais;