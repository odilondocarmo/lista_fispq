import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Produto from '../database/models/Produto';
import Dados_gerais from '../database/models/Dados_gerais';
import Fisico_quimicas from '../database/models/Fisico_quimicas';
import Identificacao from '../database/models/Identificacao';
import Informacao_ecotoxicologicas from '../database/models/Informacao_ecotoxicologicas';
import Medidas_seguranca from '../database/models/Medidas_seguranca';
import Observacoes from '../database/models/Observacoes';
import Riscos_fogo from '../database/models/Riscos_fogo';
import Sinonimos from '../database/models/Sinonimos';

const models = [
  Produto,
  Dados_gerais,
  Fisico_quimicas,
  Identificacao,
  Informacao_ecotoxicologicas,
  Medidas_seguranca,
  Observacoes,
  Riscos_fogo,
  Sinonimos
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init && model.init(this.connection));
  }
}

export default new Database();