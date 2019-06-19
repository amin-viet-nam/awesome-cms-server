const BaseService = require('./_baseService');
const stream = require('stream');
const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY
});

const s3 = new AWS.S3({
    maxAsyncS3: 20,
    s3RetryCount: 3,
    s3RetryDelay: 1000,
    multipartUploadThreshold: 20971520,
    multipartUploadSize: 15728640
});

const s3BucketName = process.env.S3_BUCKET_NAME;

class S3Service extends BaseService {
    constructor(serviceProvider, mongoDb) {
        super(serviceProvider, mongoDb);
    }

    uploadFromStreamPipe(bucketKey) {

        const pass = new stream.PassThrough();

        s3.upload({
            Bucket: s3BucketName,
            Key: bucketKey,
            Body: pass
        }, (error, data) => {
            if (error) {
                console.error("unable to upload:", error);
            } else {
                console.log(`upload s3 success ${bucketKey}`);
            }
        });

        return pass;
    }

}

module.exports = S3Service;