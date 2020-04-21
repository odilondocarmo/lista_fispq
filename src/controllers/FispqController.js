const LoadPageData = require('../utils/LoadPageData');

class FispqController{
    async index(req, res) {
        const data = await LoadPageData.load(1);

        return res.json(data);
    }
}

module.exports = new FispqController();