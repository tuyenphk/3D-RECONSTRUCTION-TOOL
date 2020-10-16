const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()
app.listen(9000, () => {
  console.log('app now listening for requests!!!')
})