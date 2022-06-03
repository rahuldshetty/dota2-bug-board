import { call, takeEvery, put } from "redux-saga/effects";
import { sagaActions } from "./actions";

import {
    fetchIssues
} from "./IssuesSaga"

import {
    fetchHeros
} from "./OpenDotaSaga"

export default function* rootSaga(){
    yield takeEvery(sagaActions.FETCH_ISSUES, fetchIssues)
    yield takeEvery(sagaActions.FETCH_HEROS, fetchHeros)
}