import { configureStore } from "@reduxjs/toolkit";
import userreducer from "../utils/userslice"
import moviereducer from "../utils/movieslice"

const appstore=configureStore({
    reducer:{
       userdetails:userreducer,
       movies:moviereducer
    }
});

export default appstore;