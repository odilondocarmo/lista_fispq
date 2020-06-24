import Sequelize, { Model } from 'sequelize';

class Identificacao extends Model {
  static init(sequelize){
    super.init({
      produto_id: Sequelize.STRING,
      numero_onu: Sequelize.STRING,
      nome: Sequelize.STRING,
      numero_risco: Sequelize.STRING,
      classe_sub: Sequelize.STRING,
      aparencia: Sequelize.STRING,
      formula: Sequelize.STRING,
      familia: Sequelize.STRING,
      fabricantes: Sequelize.STRING,
    },{
      sequelize
    });
  }
}

export default Identificacao;