const getBody = (prNumber, data) => `Coverage Status Report PR# ${prNumber}\n
Statements = ${data.statement}`

const extractMetrics = ({ statements = 0, coveredstatements = 0 }) => {
  return {
    statement: (Number(coveredstatements) / Number(statements)) * 100
  }
}

async function coverage(octokit, context, statusCoverage) {
  const { pull_request } = context.payload

  const { metrics } = statusCoverage.project[0]
  const data = extractMetrics(metrics[0].$)

  try {
    await octokit.rest.issues.createComment({
      ...context.repo,
      issue_number: pull_request.number,
      body: getBody(pull_request.number, data)
    })
  } catch (error) {
    throw new Error('Erro ao enviar comentário')
  }
  return true
}

module.exports = { coverage }
