import Produto from '../database/models/Produto'
import LoadPageData from '../utils/LoadPageData';

class FispqController{
    async index(req, res) {
        const data = await LoadPageData.load();
        const nomes = data.map(el => {
            return {
                nome: el.produto.value,
            }
        });
        try {
            const gravados = await Produto.bulkCreate(nomes, {
                returning: ['id','nome'],
                ignoreDuplicates: true
            });
            return res.json(gravados);
        }catch(err){
            return res.status(400).json({err: err.message})
        }
        
    }
}

module.exports = new FispqController();