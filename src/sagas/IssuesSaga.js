import { put, call } from "redux-saga/effects";

import octokit from "../apis/GitAPI";
import {GIT_OWNER, GIT_REPO, ISSUE_STATUS_ALL} from "../constants/GitConstants";

import { fetchIssues as fetchIssueData } from "../store/IssueReducer"

import {readIssueFromLocalStorage, setLocalStorageCache} from "../cache/issueLocalStorage"

export function* fetchIssues(action){
    const cachedResults = readIssueFromLocalStorage()
    if (cachedResults != null){
        yield put(fetchIssueData(cachedResults))
    } else {
        let results = yield call( ()=> octokit.paginate(octokit.rest.issues.listForRepo, {
                owner: GIT_OWNER,
                repo: GIT_REPO,
                state:  action.issue_state || ISSUE_STATUS_ALL
            })
        )
        setLocalStorageCache(results)
        yield put(fetchIssueData(results))
    }
} 