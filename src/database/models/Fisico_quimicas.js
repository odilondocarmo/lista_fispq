import Sequelize, { Model } from 'sequelize';

class Fisico_quimica extends Model {
  static init(sequelize){
    super.init({
      produto_id: Sequelize.STRING,
      peso_molecular: Sequelize.STRING,
      ponto_ebulicao: Sequelize.STRING,
      ponto_fusao: Sequelize.STRING,
      temp_critica: Sequelize.STRING,
      pressao_critica: Sequelize.STRING,
      densidade_vapor: Sequelize.STRING,
      densidade_ambiente: Sequelize.STRING,
      pressao_vapor: Sequelize.STRING,
      calor_latente: Sequelize.STRING,
      calor_combustao: Sequelize.STRING,
      viscosidade: Sequelize.STRING,
      solubilidade_agua: Sequelize.STRING,
      ph: Sequelize.STRING,
      reatividade_agua: Sequelize.STRING,
      reatividade_comuns: Sequelize.STRING,
      reatividade_outros: Sequelize.STRING,
      polimerizacao: Sequelize.STRING,
      degradabilidade: Sequelize.STRING,
      potencial_concentracao: Sequelize.STRING,
      dbo: Sequelize.STRING,
      neutralizacao: Sequelize.STRING,
    },{
      sequelize
    });
  }
}

export default Fisico_quimica;