import {
    createSlice
  } from "@reduxjs/toolkit";

const initState = {
    heros: []
}

const heroSlice = createSlice({
    name: "hero",
    initialState: initState,
    reducers: {
        fetchHeros: (state, action) => {
            state.heros = action.payload
        }
    }
})

export const { fetchHeros } = heroSlice.actions;
export const  heroReducer  = heroSlice.reducer;

