const Cloud = require('@google-cloud/storage')
const path = require('path')

const serviceKey = path.join(__dirname, './intrepid-nova-290922-f8f7c907b842.json')

const { Storage } = Cloud

const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'intrepid-nova-290922',
})

module.exports = storage
