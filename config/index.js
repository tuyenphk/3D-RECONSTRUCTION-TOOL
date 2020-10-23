const Cloud = require('@google-cloud/storage')
const path = require('path')

const serviceKey = path.join(__dirname, './cis4398-288621-d76a78b0e0d1.json')

const { Storage } = Cloud

const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'cis4398-288621-d76a78b0e0d1',
})

module.exports = storage
