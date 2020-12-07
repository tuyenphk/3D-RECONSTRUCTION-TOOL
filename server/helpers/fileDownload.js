const {Storage} = require('@google-cloud/storage');
const util = require('util')
const gc = require('../config')
const storage = new Storage();
const bucketName = 'symmetry-demo-bucket';
const bucket = gc.bucket('symmetry-demo-bucket');

const fileDownload = (imageFilename) => new Promise((resolve, reject) => {
  const destFilename = '../../Pixel2Mesh/Data/examples/' + imageFilename;
  const options = {
    // The path to which the file should be downloaded, e.g. "./file.txt"
    destination: destFilename,
  };

  // Downloads the file  
  try {
    console.log ("start downloading %s",imageFilename)
    console.log(process.cwd())
    storage.bucket(bucketName).file(imageFilename).download(options); 
    // console.log(`gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`);
    resolve()
  }
  catch(err){
    console.log("Error downloading:" + err)
  }
})

module.exports = fileDownload

// ----------------------- query file ------------------------
// -
// To control how many API requests are made and page through the results
// manually, set `autoPaginate` to `false`.
// -
// const callback = function(err, files, nextQuery, apiResponse) {
//   if (nextQuery) {
//     // More results exist.
//     bucket.getFiles(nextQuery, callback);
//   }

//   // The `metadata` property is populated for you with the metadata at the
//   // time of fetching.
//   files[0].metadata;

//   // However, in cases where you are concerned the metadata could have
//   // changed, use the `getMetadata` method.
//   files[0].getMetadata(function(err, metadata) {});
// };

// bucket.getFiles(function(err, files) {
//   if (!err) {
//     // files is an array of File objects.
//   }
// });

// // If your bucket has versioning enabled, you can get all of your files
// // scoped to their generation.
// bucket.getFiles({
//   versions: true
// }, function(err, files) {
//   // Each file is scoped to its generation.
// });

// bucket.getFiles({
//   autoPaginate: false
// }, callback);

// //-
// // If the callback is omitted, we'll return a Promise.
// //-
// bucket.getFiles().then(function(data) {
//   const files = data[0];
// });

// async function listFiles() {
//     // Lists files in the bucket
//     const [files] = await storage.bucket(bucketName).getFiles();

//     console.log('Files:');
//     files.forEach(file => {
//       console.log(file.name);
//     });
//   }

//   listFiles().catch(console.error);