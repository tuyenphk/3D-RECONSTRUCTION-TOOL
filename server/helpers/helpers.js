const util = require('util')
const fs = require('fs');
// const request = require('request');
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
   * const uploadImage = (file) => new Promise((resolve, reject) => { //  The created promise will eventually end in a resolved state, or in a rejected state, calling the respective callback functions (passed to then and catch) upon finishing.
   * https://googleapis.dev/nodejs/storage/latest/File.html#createWriteStream
   */
  const { filename, fileblob } = file
  const blob = bucket.file(filename.replace(/ /g, "_"))
  // const blobStream = blob.createWriteStream({ 
  //   resumable: false
  // })

  fs.createReadStream(filename)
  .pipe(blob.createWriteStream({ resumable: false }))
  .on('error', (error) => {
    reject(error)
  })
  .on('finish', () => {
    const publicUrl = format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    )
    resolve(publicUrl)
  });

  // blobStream
  // .on('finish', () => {
  //   const publicUrl = format(
  //     `https://storage.googleapis.com/${bucket.name}/${blob.name}`
  //   )
  //   resolve(publicUrl)
  // })
  // .on('error', (error) => {
  //   reject(error)
  // })
  // .end(fileblob)

})


const uploadObj = (objFilename) => new Promise((resolve, reject) => {
  // search for file f

  // const { filename, fileblob } = file
  const objFilePath = "../../../Pixel2Mesh/Data/examples/" + objFilename;
  objBucket.upload(objFilePath);
  // const blob = bucket.file(objFilePath)
  // const blobStream = blob.createWriteStream({
  //   resumable: false
  // })

  // blobStream
  // .on('finish', () => {
  //   console.log ("Uploading to objBucket")
  //   const publicUrl = format(
  //     `https://storage.googleapis.com/${objBucket.name}/${objFilename}`
  //   )
  //   resolve(publicUrl)
  // })
  // .on('error', (error) => {
  //   reject(error)
  // })
  // // .end(fileblob)

})


const downloadObj = (imageFilename) =>  { // take in objFilename
  
  var filename = imageFilename.split('.')[0]+'.obj';
  const url = `https://storage.googleapis.com/obj_file_bucket/${filename}`;
  
  return url;
}

module.exports = {uploadImage,downloadObj,uploadObj}

