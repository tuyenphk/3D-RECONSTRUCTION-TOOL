const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')

const uploadImage = require('./helpers/helpers')

const app = express()

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    // no larger than 500mb.
    fileSize: 5 * 100 * 1024* 1024,
  },
});

app.use(cors());
app.disable('x-powered-by')
app.use(multerMid.single('file'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false})) //  reading data from the <form> element 
                                                  //  urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
// Process the file upload and upload to Google Cloud Storage.
app.post('/upload', multer.single('file'), (req, res, next) => {
  if (!req.file) {
    res.status(400).send('No file uploaded.');
    return;
  }

  // Create a new blob in the bucket and upload the file data.
  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream();

  blobStream.on('error', err => {
    next(err);
  });

  blobStream.on('finish', () => {
    // The public URL can be used to directly access the file via HTTP.
    const publicUrl = format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    );
    res.status(200).send(publicUrl);
  });

  blobStream.end(req.file.buffer);
});
// app.post('/uploads', async (req, res, next) => {
//   try {
//     console.log ("requested receive")
//     const imageUrl = await uploadImage(req.body)  // values from the <form> element inside req.body

//     res.status(200).json({
//         message: "Upload was successful",
//         data: imageUrl
//       })
//     res.redirect('/')

//   } catch (error) {
//     next(error)
//   }
// })

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err,
    message: 'Internal server error!',
  })
  next()
})

app.listen(9001, () => {
  console.log('app now listening for requests!!!')
})
