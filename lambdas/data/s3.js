class S3 {
  constructor(S3Adapter) {
    this.s3Adapter = S3Adapter;
    this.bucket = process.env.bucketName;
  }
  sendToS3(buffer) {
    return this.s3Adapter.write(
      this.bucket,
      buffer,
      "CoronaHelp.xlsx",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
  }
}

module.exports = { S3 };
