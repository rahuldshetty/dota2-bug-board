import { put, call } from "redux-saga/effects";

import octokit from "../apis/GitAPI";
import {GIT_OWNER, GIT_REPO, ISSUE_STATUS_ALL} from "../constants/GitConstants";

import { fetchIssues as fetchIssueData } from "../store/IssueReducer"

export function* fetchIssues(action){
    let results = yield call( ()=> octokit.paginate(octokit.rest.issues.listForRepo, {
            owner: GIT_OWNER,
            repo: GIT_REPO,
            state:  action.issue_state || ISSUE_STATUS_ALL
        })
    )
    yield put(fetchIssueData(results))
} 