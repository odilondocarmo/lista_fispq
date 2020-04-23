const axios = require('axios');
const cheerio = require('cheerio');
const LoadProductsData = require('./LoadProductsData');

class LoadPageData{
    async load(){
        const mlURL = `https://sistemasinter.cetesb.sp.gov.br/produtos/produto_consulta_completa.asp`;
        
        const {data : body} = await axios(mlURL);
        const $ = cheerio.load(body);
        const resultados = [];
        $('table').each((i, element) =>{
            $(element).find('tbody').find('a').each((index, row) => {
                const data = $(row).attr('href');
                resultados.push(data);
            });
        });
        const resultadosFiltrados = [];
        resultados.map(el => {
            if (el.startsWith('ficha_completa1.asp') && !resultadosFiltrados.includes(el)){
                resultadosFiltrados.push(el);
            }
        });
        return await LoadProductsData.load(resultadosFiltrados);
    }
}

module.exports = new LoadPageData();
