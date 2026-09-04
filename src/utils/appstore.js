import { configureStore } from "@reduxjs/toolkit";
import userreducer from "../utils/userslice"
import moviereducer from "../utils/movieslice"
import gptreducer from "../utils/gptsearchslice";
import languagereducer from "../utils/languageslice"

const appstore=configureStore({
    reducer:{
       userdetails:userreducer,
       movies:moviereducer,
       gptsearch:gptreducer,
       language:languagereducer
    }
});

export default appstore;