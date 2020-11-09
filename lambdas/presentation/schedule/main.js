const { response } = require("../helper/http/response");

class Main {
  constructor(GetCoronaInfo, CreateRows, S3) {
    this.getCoronaInfo = GetCoronaInfo;
    this.createRows = CreateRows;
    this.s3 = S3;
  }

  async handler(event) {
    try {
      const coronaInfo = await this.getCoronaInfo.getInfo();

      const bufferXlsx = await this.createRows.generateXlsx(coronaInfo);

      await this.s3.sendToS3(bufferXlsx);
      return response._200({ message: "xlsx has been created with success" });
    } catch (err) {
      return response._500({ message: "Internal server error" });
    }
  }
}
module.exports = { Main };
