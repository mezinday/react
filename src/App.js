import React from "react";

import Main from "./Page/Main";

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
