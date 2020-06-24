import Sequelize, { Model } from 'sequelize';

class Medidas_seguranca extends Model {
  static init(sequelize){
    super.init({
      produto_id: Sequelize.STRING,
      medidas_prev: Sequelize.STRING,
      epi: Sequelize.STRING,
    },{
      sequelize
    });
  }
}

export default Medidas_seguranca;