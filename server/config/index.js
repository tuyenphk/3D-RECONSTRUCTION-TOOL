const Cloud = require('@google-cloud/storage')
const path = require('path')

const serviceKey = path.join(__dirname, 'key')

const { Storage } = Cloud

const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'project-demo-294317',
})

module.exports = storage
