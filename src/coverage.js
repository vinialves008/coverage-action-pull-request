async function coverage(octokit, context) {
  const { pull_request } = context.payload

  const body = `
    <h1> Teste Coverage </h1>
    <p> Romero Brito </p>
  `

  await octokit.rest.issues.createComment({
    ...context.repo,
    issue_number: pull_request.number,
    mediaType: {
      format: 'html'
    },
    body
  })
  return true
}

module.exports = { coverage }
