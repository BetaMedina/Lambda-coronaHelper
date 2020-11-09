const axios = require("axios");

class Axios {
  async get(url, headers) {
    const { data } = await axios.get(url, headers);

    if (!data) {
      throw new Error("Data not found in API");
    }

    return data;
  }
}
module.exports = { Axios };
