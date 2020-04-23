const axios = require('axios');
const cheerio = require('cheerio');
const camelcaseKeys = require('camelcase-keys');
const delay = require('delay');

class LoadProductsData{
  async load(produtosURL){
    const baseURL = 'https://sistemasinter.cetesb.sp.gov.br/produtos/';

    // para o primeiro link
    if(!Array.isArray(produtosURL)) return null;
    try {
      const result = await Promise.all(produtosURL.map(async uri => {
        const fullURL = `${baseURL}${encodeURI(uri)}`;
        const {data : body} = await axios(fullURL);
        const $ = cheerio.load(body);
        const data = {};
        data.onu = {
          title: 'Número ONU',
          value: $('td.font07').first().text().trim().replace(/  +/g, ' ')
        }
        data.produto = {
          title: 'Nome do produto',
          value: $('td.font07').last().text().trim().replace(/  +/g, ' ')
        }
        data.imgLink = {
          title: 'Rótulo de risco',
          value: $('img').first().attr('src') ? `${baseURL}${$('img').first().attr('src')}`.replace(/\s\s+/g, '') : null
        }
        $('td').each((i, element) => {
          const key = $(element).find('.font02').text().trim().replace(/\s\s+/g, ' ');
          const content = key === 'Sinônimos' ? $(element).find('.font01').text().trim().replace(/  +/g, ' ').split(';') : $(element).find('.font01').text().trim().replace(/  +/g, ' ');
          if(key.length > 0) {
            data[key.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/(?!\w|\s.)/g, '') .replace(/\s+/g, ' ') .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2')] = {
              title: key,
              value: content
            };
          }
        });
        await delay(300);
        return camelcaseKeys(data);
      }));
      return result;
    }catch(err) {
      console.log(err);
      return err;
    }
    
  }
}

module.exports = new LoadProductsData();