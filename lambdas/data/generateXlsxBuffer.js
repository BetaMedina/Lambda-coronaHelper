class GenerateXlsxBuffer {
  constructor(GenerateXlsx) {
    this.generate = GenerateXlsx;
  }

  async generateXlsx(coronaData) {
    const coronaResponse = coronaData.data.map((item) => {
      const { uf: ID, state, cases, deaths, suspects, refuses } = item;
      const payload = {
        uf: ID,
        state,
        cases,
        deaths,
        suspects,
        refuses,
      };
      return payload;
    });
    return this.generate.generateBuffer(coronaResponse);
  }
}

module.exports = { GenerateXlsxBuffer };
