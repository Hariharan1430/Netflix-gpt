import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../utils/firebase";
import { addetails, removedetails } from "../utils/userslice";

import Loginpage from "./Loginpage";
import Mainpage from "./Mainpage";

// ---------------- Auth listener ----------------
const AuthListener = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{

  const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid,displayName,email,password} = user;
    dispatch(addetails({
      uid:uid,
      displayName:displayName,
      email:email,
      password:password

    }))
    navigate("/main")

    // ...
  } else {
    dispatch(removedetails())
    navigate("/")
  }
});
return ()=>unsubscribe()
},[])
  return <Outlet />;
};

// ---------------- Router setup ----------------
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AuthListener />,
    children: [
      {
        index: true,
        element: <Loginpage />,
      },
      {
        path: "main",
        element: <Mainpage />,
      },
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={approuter} />;
};

export default Body;