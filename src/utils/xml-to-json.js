const xml2js = require('xml2js')

const xmlToJSON = async xml => {
  const parser = new xml2js.Parser()

  const xpto = await new Promise((resolve, reject) =>
    parser.parseString(xml, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  )
  return xpto
}

module.exports = xmlToJSON
