require('dotenv').config();
process.env.AWS_SDK_LOAD_CONFIG = '1';
const aws = require('aws-sdk');
const fs = require('fs');
const uuid = require('uuid');

function generateRandomName() {
    // Generate a v4 (random) UUID
    const randomName = uuid.v4();

    return randomName;
}

const bucketName = process.env.AWS_BUCKET_NAME;
const bucketRegion = process.env.AWS_BUCKET_REGION;
const bucketKey = process.env.AWS_ACCESS_KEY;
const bucketSKey = process.env.AWS_SECRET_KEY;

aws.config.update({
    accessKeyId: bucketKey,
    secretAccessKey: bucketSKey,
    region: bucketRegion,
});

const s3 = new aws.S3();

async function generateS3Url(){
    const uploadParams = {
        Bucket: bucketName,
        Key: generateRandomName(),
        Expires: 60
    }
    return await s3.getSignedUrlPromise('putObject', uploadParams);
}

exports.generateS3Url = generateS3Url;