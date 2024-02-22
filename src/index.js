export const Minio = require("minio");

let minioClient = null;

export function initMinio(config) {
  if (!config) {
    throw new Error("Minio的配置不能为空");
  }
  minioClient = new Minio.Client(config);
}

//封装的上传到minio
export function putObject(bucketName, objectName, file, size, metaData, callback) {
  if (!minioClient) {
    throw new Error("请先初始化Minio");
  }
  let buf = Buffer.from(file); //Buffer
  minioClient.putObject(
    bucketName,
    objectName,
    buf,
    size,
    metaData,
    callback
  );
}

