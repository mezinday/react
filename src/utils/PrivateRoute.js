import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = () => {
    const password = window.localStorage.getItem('password');
    if (password === null) {
      alert("로그인 필요한 페이지입니다.");
      return false;
    }
    return true;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/main" />
      }
    />
  );
};

export default PrivateRoute;