import { createSlice } from "@reduxjs/toolkit";


const gptsearchslice=createSlice({
    name:"gptsearch",
    initialState:{
       search:false
    },
    reducers:{
        gptsearch:(state)=>{
            state.search=!state.search
        },
        searchvalue:(state)=>{
            state.search=false;
        }
    }
})

export const{gptsearch,searchvalue}=gptsearchslice.actions

export default gptsearchslice.reducer