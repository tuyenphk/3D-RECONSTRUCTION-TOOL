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

app.post('/uploads', async (req, res, next) => {
  try {
    const myFile = req.file
    console.log ("requested receive")
    const imageUrl = await uploadImage(myFile)  // values from the <form> element inside req.body

    res.status(200).json({
        message: "Upload was successful",
        data: imageUrl
      })
    res.redirect('/')

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

app.listen(9001, () => {
  console.log('app now listening for requests!!!')
})
