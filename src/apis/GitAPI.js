import { Octokit } from "@octokit/rest";

import { GIT_TOKEN } from "./secret";

const octokit = new Octokit({
    auth: GIT_TOKEN
})

export default octokit