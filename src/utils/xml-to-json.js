const parser = require('xml2json')

const xmlToJSON = xml => parser.toJson(xml)

module.exports = xmlToJSON
