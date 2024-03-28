async function coverage(octokit, context) {
  const { pull_request } = context.payload

  const body = `
    ## Teste Coverage
    ### Romero Brito
  `

  await octokit.issues.createComment({
    ...context.repo,
    issue_number: pull_request.number,
    body
  })
  return true
}

module.exports = { coverage }
