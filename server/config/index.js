const Cloud = require('@google-cloud/storage')
const path = require('path')

const serviceKey = path.join(__dirname, './project-demo-294317-e645016330ce.json')

const { Storage } = Cloud

const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'project-demo-294317',
})

module.exports = storage
