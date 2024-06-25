const tabelaModel = {
  getData: () => {
    const periodicTableData = [
      { element: 'Hydrogen', symbol: 'H', atomicNumber: 1 },
      { element: 'Oxygen', symbol: 'O', atomicNumber: 8 },
      { element: 'Carbon', symbol: 'C', atomicNumber: 6 },
      { element: 'Iron', symbol: 'Fe', atomicNumber: 26 },
      { element: 'Calcium', symbol: 'Ca', atomicNumber: 20 }
    ];
    return { periodicTable: periodicTableData };
  }
};

module.exports = tabelaModel;