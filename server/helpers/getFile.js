const {Storage} = require('@google-cloud/storage');
const storage = new Storage();
const bucket = storage.bucket('albums');

bucket.getFiles(function(err, files) {
  if (!err) {
    // files is an array of File objects.
  }
});

//-
// If your bucket has versioning enabled, you can get all of your files
// scoped to their generation.
//-
bucket.getFiles({
  versions: true
}, function(err, files) {
  // Each file is scoped to its generation.
});

//-
// To control how many API requests are made and page through the results
// manually, set `autoPaginate` to `false`.
//-
const callback = function(err, files, nextQuery, apiResponse) {
  if (nextQuery) {
    // More results exist.
    bucket.getFiles(nextQuery, callback);
  }

  // The `metadata` property is populated for you with the metadata at the
  // time of fetching.
  files[0].metadata;

  // However, in cases where you are concerned the metadata could have
  // changed, use the `getMetadata` method.
  files[0].getMetadata(function(err, metadata) {});
};

bucket.getFiles({
  autoPaginate: false
}, callback);

//-
// If the callback is omitted, we'll return a Promise.
//-
bucket.getFiles().then(function(data) {
  const files = data[0];
});