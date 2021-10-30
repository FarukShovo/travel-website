import React from "react";
import { Redirect, Route } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

function PrivateRoute(props) {
  console.log(props);
  const { children, ...rest } = props;
  const { user } = useFirebase();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
