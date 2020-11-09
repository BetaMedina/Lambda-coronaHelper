const { S3 } = require("../../../data/s3");
const { S3Adapter } = require("../../../infra/adapters/s3/s3");

const S3Factory = () => {
  return new S3(new S3Adapter());
};

module.exports = { S3Factory };
