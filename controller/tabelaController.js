const tabelaModel = require('../models/tabela');

const tabelaController = {
  getIndex: (req, res) => {
    const data = tabelaModel.getData();
    res.render('index', { data });
  }
};

module.exports = tabelaController;