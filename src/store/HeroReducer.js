import {
    createSlice
  } from "@reduxjs/toolkit";

const initState = {
    heros: [],
    selectedHero: null
}

const heroSlice = createSlice({
    name: "hero",
    initialState: initState,
    reducers: {
        fetchHeros: (state, action) => {
            state.heros = action.payload
        },
        setSelectedHero: (state, action) => {
            state.selectedHero = action.payload
        }
    }
})

export const { fetchHeros, setSelectedHero } = heroSlice.actions;
export const  heroReducer  = heroSlice.reducer;

