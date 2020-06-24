import Produto from '../database/models/Produto';
import Sinonimos from '../database/models/Sinonimos';
import Identificacao from '../database/models/Identificacao';
import LoadPageData from '../utils/LoadPageData';
import ManageData from '../utils/ManageData';

class FispqController{
    async create(req, res) {
        const data = await LoadPageData.load();
        try {
            const produtosCriados = await Produto.bulkCreate(ManageData.produtos(data), {
                returning: ['id','nome'],
                ignoreDuplicates: true
            });
            const sinonimosCriados = await Sinonimos.bulkCreate(ManageData.sinonimos(data), {
                ignoreDuplicates: true,
                returning: ['id', 'produto_id'],
            });
            const identificacaoCriados = await Identificacao.bulkCreate(ManageData.identificacao(data), {
                returning: ['id','produto_id'],
                ignoreDuplicates: true
            });
            return res.json({
                Produtos: `${produtosCriados.filter(el => el.id).length} novos itens`,
                Sinonimos: `${sinonimosCriados.filter(el => el.id).length} novos itens`,
                Identificações: `${identificacaoCriados.filter(el => el.id).length} novos itens`,
            });
        }catch(err){
            return res.status(err.status || 400).json({err: err.message});
        }
        
    }

    async show (req, res) {
        
        return res.json(await Produto.findAll());
    }

    async index (req, res) {
        
        return res.json(await Produto.findAll({
            include: [Sinonimos]
        }));
    }
}

module.exports = new FispqController();