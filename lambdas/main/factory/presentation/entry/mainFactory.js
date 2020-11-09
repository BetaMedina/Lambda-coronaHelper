const { getCoronaInfoFactory } = require("../../data/getCoronaInfoFactory");
const {
  GenerateXlsxFactory,
} = require("../../data/GenerateXlsxFactory");
const { S3Factory } = require("../../data/S3Factory");

const { Main } = require("../../../../presentation/schedule/main");

const mainFactory = () => {
  return new Main(
    getCoronaInfoFactory(),
    GenerateXlsxFactory(),
    S3Factory()
  );
};
module.exports = { main: (event) => mainFactory().handler(event) };
