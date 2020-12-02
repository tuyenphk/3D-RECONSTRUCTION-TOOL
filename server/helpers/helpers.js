const util = require('util')
const gc = require('../config/')
const bucket = gc.bucket('symmetry-demo-bucket')
const objBucket = gc.bucket('obj_file_bucket')

const { format } = util

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
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    )
    // const publicUrl = file.publicUrl();
    resolve(publicUrl)
  })
  .on('error', () => {
    reject(`Unable to upload image, something went wrong`)
  })
  .end(fileblob)

})

const downloadObj = (file) =>  {

  // Downloads the file
  const url = obj_file_bucket.file(file).publicUrl();
return url;
}

module.exports = uploadImage
module.exports = downloadObj
