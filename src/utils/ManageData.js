class ManageData {
  produtos (data) {
    const nomes = [];
    data.forEach(el => {
        const {
            produto: nome,
            sinonimos: sins
        } = el;
        nomes.push({
            nome
        });
    });
    return nomes;
  }

  sinonimos (data) {
    const sinonimos = [];
    data.forEach(el => {
      const {
        produto: nome,
        sinonimos: sins
      } = el;
      sins.forEach(sin => {
        sinonimos.push({
            produto_id: nome,
            sinonimo: sin,
        });
      });
    });
    return sinonimos;
  }

  identificacao (data) {
    return data.map(el => {
      const {
        produto: produto_id,
        onu: numero_onu,
        produto: nome,
        numeroDeRisco: numero_risco,
        'classe /Subclasse':classe_sub,
        aparencia: aparencia,
        formulaMolecular: formula,
        familiaQuimica: familia,
        fabricantes: fabricantes,
      } = el;

      return {
        produto_id,
        numero_onu,
        nome: 'teste',
        numero_risco,
        classe_sub,
        aparencia,
        formula,
        familia,
        fabricantes,
      };
    });
  }

  medidas (data) {

  }

  riscos (data) {

  }

  propriedades (data) {

  }

  informacao (data) {

  }

  dadosGerais (data) {

  }

  observacoes (data) {

  }
}

export default new ManageData();