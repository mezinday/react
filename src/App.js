import React from "react";

import Main from "./Page/Main";
import Sub2 from './Page/Sub2';

import Store from './store/Store';

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Store>
      <Switch>
        {/* <Route path="/" exact component={Main} /> */}
        <Route path="/" exact component={Sub2} />
        <Redirect to="/" />
      </Switch>
    </Store>
  );
};

export default App;