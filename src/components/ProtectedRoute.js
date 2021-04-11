import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  header: Header,
  component: Component,
  footer: Footer,
  ...props
}) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? (
          <>
            {" "}
            <Header {...props} />
            <Component {...props} />
            <Footer />
          </>
        ) : (
          <Redirect to="./sign-in" />
        )
      }
    </Route>
  );
};

export default ProtectedRoute;
