const { GetCoronaInfo } = require("../../../data/getCoronaInfo");
const { GetDate } = require("../../../data/getFormattedDate");

const { Axios } = require("../../../infra/adapters/axios/apiAdapter");

const getCoronaInfoFactory = () => {
  const getDate = new GetDate();
  const apiAdapter = new Axios();
  return new GetCoronaInfo(getDate, apiAdapter);
};

module.exports = { getCoronaInfoFactory };
