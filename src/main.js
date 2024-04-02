const core = require('@actions/core')
const { coverage } = require('./coverage')
const github = require('@actions/github')
const fs = require('fs')
const xmlToJSON = require('./utils/xml-to-json')

function getOctokit(GITHUB_TOKEN) {
  try {
    return github.getOctokit(GITHUB_TOKEN)
  } catch (error) {
    return undefined
  }
}

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN')

    const xmlCoverage = fs
      .readFileSync(core.getInput('coverage') || './clover.xml')
      .toString()

    const jsonCoverage = await xmlToJSON(xmlCoverage)

    const octokit = getOctokit(GITHUB_TOKEN)

    const { context = {} } = github
    await coverage(octokit, context, jsonCoverage.coverage)
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
