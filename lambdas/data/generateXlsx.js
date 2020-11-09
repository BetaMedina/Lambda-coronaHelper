class GenerateXlsx {
  constructor(Xlsx) {
    this.xlsx = Xlsx;
  }

  async generateBuffer(rows) {
    const bufferXlsx = await this.xlsx.createXlsx(rows);

    if (!bufferXlsx) {
      throw new Error("Xlsx not generated");
    }

    return bufferXlsx;
  }
}

module.exports = { GenerateXlsx };
