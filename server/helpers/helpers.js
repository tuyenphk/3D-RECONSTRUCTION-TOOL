const util = require('util')
const gc = require('../config/')
const bucket = gc.bucket('symmetry-demo-bucket')


const { format } = util



exports.copyFileToGCS = (localFilePath, bucketName, options) => {
  options = options || {};

  const bucket = storage.bucket('symmetry-demo-bucket');
  const fileName = path.basename(localFilePath);
  const file = bucket.file(fileName);

  return bucket.upload(localFilePath, options)
    .then(() => file.makePublic())
    .then(() => exports.getPublicUrl(bucketName, gcsName));
};

/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const uploadImage = (file) => new Promise((resolve, reject) => {
  /**
   * The properties being extracted here must match those passed into  
   * the FormData body in the browser.
   */
  const { filename, fileblob } = file

  const blob = bucket.file(filename.replace(/ /g, "_"))
  const blobStream = blob.createWriteStream({
    resumable: false
  })

  blobStream.on('finish', () => {
    const publicUrl = format(
      `https://storage.googleapis.com/${bucket.name}/${blob.filename}`
    )
    resolve(publicUrl)
  })
  .on('error', () => {
    reject(`Unable to upload image, something went wrong`)
  })
  .end(fileblob)

})

module.exports = uploadImage
