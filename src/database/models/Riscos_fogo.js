import Sequelize, { Model } from 'sequelize';

class Riscos_fogo extends Model {
  static init(sequelize){
    super.init({
      produto_id: Sequelize.STRING,
      acoes_combustao: Sequelize.STRING,
      comportamento_fogo: Sequelize.STRING,
      perigosos_combustao: Sequelize.STRING,
      extincao_negado: Sequelize.STRING,
      inflamabilidade_ar: Sequelize.STRING,
      ponto_fulgor: Sequelize.STRING,
      temp_ignicao: Sequelize.STRING,
      taxa_queima: Sequelize.STRING,
      taxa_evaporacao: Sequelize.STRING,
      nfpa: Sequelize.STRING,
    },{
      sequelize
    });
  }
}

export default Riscos_fogo;