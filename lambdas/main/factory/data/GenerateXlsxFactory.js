const { GenerateXlsx } = require("../../../data/generateXlsx");
const { Xlsx } = require("../../../infra/adapters/xlsx/xlsx");
const { GenerateXlsxBuffer } = require("../../../data/generateXlsxBuffer");

const GenerateXlsxFactory = () => {
  const xlsx = new Xlsx();
  const coronaXlsx = new GenerateXlsx(xlsx);
  return new GenerateXlsxBuffer(coronaXlsx);
};
module.exports = { GenerateXlsxFactory };
