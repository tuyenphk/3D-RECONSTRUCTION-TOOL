const util = require('util')
const fs = require('fs');
const request = require('request');
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
    resolve(publicUrl)
  })
  .on('error', (error) => {
    reject(error)
  })
  .end(fileblob)

})

const downloadObj = (file) =>  { // take in objFilename
  
  var filename = file.split('.')[0]+'.obj';
  const url = `https://storage.googleapis.com/obj_file_bucket/${filename}`;
  
  // Downloads the file
  request.head(url, (err, res, body) => {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(url).pipe(fs.createWriteStream(filename));
  });
  
  return url;
}

module.exports = {uploadImage,downloadObj}

