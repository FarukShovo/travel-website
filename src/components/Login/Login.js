import React from "react";

import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";
const Login = () => {
  const { handleGoogleLogin } = useFirebase();

  return (
    <section className="book login" id="book">
      <h1 className="heading">
        <span>Login</span> now
      </h1>

      <div className="row">
        <button onClick={handleGoogleLogin} className="btn btn-warning">
          Google Sign In
        </button>
      </div>
    </section>
  );
};

export default Login;
