const aws = require("aws-sdk");
require("dotenv").config();

// load env variables from .env file
const { AWS_ACCESS_KEY_ID, AWS_SECRET_KEY, BUCKET } = process.env;

// set the aws config with our secrets
aws.config.update({
  region: "eu-west-3",
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_KEY,
});

const S3_BUCKET = BUCKET;

exports.sign_s3 = (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 50,
    ContentType: fileType,
    ACL: "public-read",
  };

  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log("error on getting signed url : ", err);
      res.json({ success: false, error: err });
    }

    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    res.json({ success: true, data: { returnData } });
  });
};
