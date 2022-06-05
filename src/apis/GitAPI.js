import { Octokit } from "@octokit/rest";

// Add private git token if you hit request rate limit from Github
// import { GIT_TOKEN } from "./secret";

const octokit = new Octokit({
    // auth: GIT_TOKEN
})

export default octokit