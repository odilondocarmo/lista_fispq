const {Router, json} = require('express');
const cors = require('cors');
const FispqController = require('./controllers/FispqController');

const routes = new Router();

routes.use(cors());
routes.use(json());
routes.post('/fispq', FispqController.create);
routes.get('/fispq/:name', FispqController.show);
routes.get('/fispq', FispqController.index);


module.exports = routes;