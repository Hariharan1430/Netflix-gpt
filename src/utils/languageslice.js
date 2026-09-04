import {  createSlice } from "@reduxjs/toolkit";


const languageslice=createSlice({
    name:"language",
    initialState:{
        lang:"en"
    },reducers:{
        setlangauge:(state,actions)=>{
            state.lang=actions.payload
        }
    }
})

export const {setlangauge}=languageslice.actions

export default languageslice.reducer