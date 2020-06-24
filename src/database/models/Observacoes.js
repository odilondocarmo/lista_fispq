import Sequelize, { Model } from 'sequelize';

class Observacoes extends Model {
  static init(sequelize){
    super.init({
      produto_id: Sequelize.STRING,
      pi: Sequelize.STRING,
    },{
      sequelize
    });
  }
}

export default Observacoes;