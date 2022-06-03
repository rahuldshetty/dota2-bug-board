import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from "redux-saga";
import saga from "../sagas/sagas";  

import {issueReducer} from "./IssueReducer"
import {heroReducer} from "./HeroReducer"

let sagaMiddleWare = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    issues: issueReducer,
    heros: heroReducer
  },
  middleware: [sagaMiddleWare]
})

sagaMiddleWare.run(saga)