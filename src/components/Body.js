import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addetails, removedetails } from "../utils/userslice";

import Loginpage from "./Loginpage";
import Mainpage from "./Mainpage";

const Body = () => {

  const dispatch=useDispatch()
  useEffect(()=>{

  onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid,displayName,email,password} = user;
    dispatch(addetails({
      uid:uid,
      displayName:displayName,
      email:email,
      password:password

    }))

    // ...
  } else {
    dispatch(removedetails())
  }
});
},[])
// ---------------- Router setup ----------------
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />
  },
      {
        path: "main",
        element: <Mainpage />,
      },
    
]);
  return <RouterProvider router={approuter} />;
};

export default Body;