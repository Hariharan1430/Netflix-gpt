import React, { useRef, useState } from "react";
import style from "../styles/login.module.css";
import { formvalidation } from "../utils/loginvalidation";

function Loginpage() {
  const [logopt, setlogopt] = useState(true);
  const [message, setmessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handlesubmit = () => {
    setlogopt(!logopt);
    setmessage(""); // Clear previous error
  };

  const validationsubmit = (e) => {
    e.preventDefault();

    const value = formvalidation(
      logopt ? "" : name.current.value,
      email.current.value,
      password.current.value,
      logopt
    );

    setmessage(value);

    
  };

  return (
    <div className={style.maindiv}>
      <div className={style.logoContainer}>
        <img
          className={style.logo}
          src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAfwxusEeCteu-L_QQ56_G2cohyI1E4BIh2uyr5t9gDhH0CKWHw3NVhndjuF7yQ26z3cYq_lnzY5pP6OarHyiibuiy2jIIa5sIhSvgal1S6u9YDVAyVoX6osPniEKN-dYy77H_pLfOCD7.svg"
          alt="Netflix Logo"
        />
      </div>

      <div className={style.formContainer}>
        <form onSubmit={validationsubmit}>
          <h3>{logopt ? "Sign In" : "Sign Up"}</h3>

          {!logopt && (
            <input
              ref={name}
              type="text"
              placeholder="Enter Your Name"
              className={style.inputbox}
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className={style.inputbox}
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className={style.inputbox}
          />

          {/* Error Message */}
          {message && (
            <p className={style.errormessage}>
              {message}
            </p>
          )}

          <button className={style.button}>
            {logopt ? "Sign In" : "Sign Up"}
          </button>

          <h5 className={style.signup} onClick={handlesubmit}>
            {logopt
              ? "New to Netflix? Sign up now"
              : "Already Registered? Sign in to watch"}
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;