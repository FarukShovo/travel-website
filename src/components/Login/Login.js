import React from "react";

import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";
const Login = () => {
  const { handleGoogleLogin } = useFirebase();

  return (
    <div style={{ marginTop: 50 }}>
      <section className="book login" id="book">
        <h1 className="heading">
          <span>Login</span>
        </h1>

        <div className="row">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-light justify-content-center"
          >
            Google Sign In
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
