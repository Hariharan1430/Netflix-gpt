import { createSlice } from "@reduxjs/toolkit";


const movieslice=createSlice({
    name:"movies",
    initialState:{
        newmovies:null,
        newtrailer:null
    },
    reducers:{
        addnewmovies:(state,actions)=>{
            state.newmovies=actions.payload
        },
        addtrailervideo:(state,actions)=>{
            state.newtrailer=actions.payload
        }

    }
})

export const {addnewmovies,addtrailervideo}=movieslice.actions;

export default movieslice.reducer