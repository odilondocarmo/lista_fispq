import Sequelize, { Model } from 'sequelize';

class Sinonimos extends Model {
  static init(sequelize){
    super.init({
      produto_id: Sequelize.STRING,
      sinonimo: Sequelize.STRING,
    },{
      sequelize
    });
  }


}

export default Sinonimos;