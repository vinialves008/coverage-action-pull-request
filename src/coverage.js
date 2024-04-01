async function coverage(octokit, context) {
  const { pull_request } = context.payload

  const body = `
    Teste Coverage \nRomero Brito
  `

  await octokit.rest.issues.createComment({
    ...context.repo,
    issue_number: pull_request.number,
    body
  })
  return true
}

module.exports = { coverage }
