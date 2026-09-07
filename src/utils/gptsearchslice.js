import { createSlice } from "@reduxjs/toolkit";


const gptsearchslice=createSlice({
    name:"gptsearch",
    initialState:{
       search:false,
       moviestitle:null,
       moviesdata:null,
       loading:false
    },
    reducers:{
        gptsearch:(state)=>{
            state.search=!state.search
        },
        searchvalue:(state)=>{
            state.search=false;
        },
        getgeminimovies:(state,actions)=>{
         const{movietitle,moviedata}=actions.payload;
         state.moviestitle=movietitle;
         state.moviesdata=moviedata;
       

        },
        setLoading:(state,actions)=>{
        state.loading=actions.payload
        }
    }
})

export const{gptsearch,searchvalue,getgeminimovies,setLoading}=gptsearchslice.actions

export default gptsearchslice.reducer