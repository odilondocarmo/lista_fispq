import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Produto from '../database/models/Produto';

const models = [Produto];

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