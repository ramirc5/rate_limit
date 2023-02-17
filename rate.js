const { Octokit } = require("@octokit/core");
// install package with `use nvm 16.15.1` and `npm install @octokit/core`
// or: import { Octokit } from "@octokit/core";
const rateLimit = async (githubToken) => {
  const octokit = new Octokit({
    auth: githubToken //switch to token variable
  })
  const response = await octokit.request("GET /rate_limit", {})
  console.log(response.data.rate.remaining)
}
