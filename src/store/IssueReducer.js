import {
    createSlice
  } from "@reduxjs/toolkit";

const initState = {
    issues: []
}

const issueSlice = createSlice({
    name: "slice",
    initialState: initState,
    reducers: {
        fetchIssues: (state, action) => {
            state.issues = action.payload
        }
    }
})

export const { fetchIssues } = issueSlice.actions;
export const  issueReducer  = issueSlice.reducer;

