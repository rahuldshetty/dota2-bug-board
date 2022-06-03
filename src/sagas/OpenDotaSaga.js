import { put, call } from "redux-saga/effects";

import callOpenDotaGETAPI from "../apis/OpenDotaAPI"

import { fetchHeros as fetchHerosData } from "../store/HeroReducer"

export function* fetchHeros(action){
    let results = yield call( ()=> callOpenDotaGETAPI({
            endpoint: "/heroes",
            data: {},
            method: "get"
        })
    )
    yield put(fetchHerosData(results.data))
}