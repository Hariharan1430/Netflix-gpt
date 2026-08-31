import { configureStore } from "@reduxjs/toolkit";
import userreducer from "../utils/userslice"

const appstore=configureStore({
    reducer:{
       userdetails:userreducer
    }
});

export default appstore;