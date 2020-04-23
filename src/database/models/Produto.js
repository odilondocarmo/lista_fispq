import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING,
    },{
      sequelize
    });
  }
}

export default Produto;