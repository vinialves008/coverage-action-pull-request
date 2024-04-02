const xmlToJSON = xml => {
  return {
    coverage: {
      project: { metrics: { statements: 10, coveredstatements: 10 } }
    }
  }
}

module.exports = xmlToJSON
