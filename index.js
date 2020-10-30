
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const uploadImage = require('./helpers/helpers')

const app = express()

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    // no larger than 5mb.
    fileSize: 5 * 1024 * 1024,
  },
});


app.disable('x-powered-by')
app.use(multerMid.single('file'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/uploads', async (req, res, next) => {
    console.log("requesting file")
    try {
    const myFile = req.file
      console.log("requesting file")
      const imageUrl = await uploadImage(myFile)
     
    res
      .status(200)
      .json({
        message: "Upload was successful",
        data: imageUrl
      })
  } catch (error) {
      
      next(error)
  }
})

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err,
    message: 'Internal server error!',
  })
  next()
})

app.listen(8000, () => {
  console.log('app now listening for requests!!!')
})


/*
const axios = require('axios');
const fs = require('fs');

var config = {
    responseType: 'stream'
};

let url = 'http://34.105.28.90:8888/#modeling';

async function getImage() {

    let resp = await axios.get(url, config);
    resp.data.pipe(fs.createWriteStream('image.jpg'));
}

getImage();
*/
