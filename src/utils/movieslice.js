import { createSlice } from "@reduxjs/toolkit";


const movieslice=createSlice({
    name:"movies",
    initialState:{
        newmovies:null,
        newtrailer:null,
        upcomming:null,
        toprated:null,
        popularmovies:null
    },
    reducers:{
        addnewmovies:(state,actions)=>{
            state.newmovies=actions.payload
        },
        addtrailervideo:(state,actions)=>{
            state.newtrailer=actions.payload
        }, 
        addupcommingvideo:(state,actions)=>{
            state.upcomming=actions.payload
        },
        addTopRatedMovies:(state,actions)=>{
            state.toprated=actions.payload
        },
        addPopularmovielist:(state,actions)=>{
            state.popularmovies=actions.payload
        }

    }
})

export const {addnewmovies,addtrailervideo,addupcommingvideo,addTopRatedMovies,addPopularmovielist}=movieslice.actions;

export default movieslice.reducer