import React from "react";
import { useHistory, useLocation } from "react-router";

import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";
const Login = () => {
  const { handleGoogleLogin, user } = useFirebase();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const redirect = () => {
    return user.email ? history.replace(from) : null;
  };
  redirect();

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
