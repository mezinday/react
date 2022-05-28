import React from "react";

import styled from "styled-components";
import Main from "./Page/Main";
import Sub1 from "./Page/Sub1";
import Sub2 from "./Page/Sub2";
import Sub3 from "./Page/Sub3";
import Sub4 from "./Page/Sub4";
import Sub5 from "./Page/Sub5";
import Sub6 from "./Page/Sub6";
import Login from "./Page/Login";
import Babo from "./Page/Babo";

import Store from "./store/Store";

import { Switch, Route, Redirect } from "react-router-dom";

const ROOT = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-x: hidden;
`;
const Container = styled.div``;
const App = () => {
  return (
    <ROOT>
      <Container>
        <Store>
          <Switch>
            <Route path="/main" exact component={Main} />
            <Route path="/sub1" exact component={Sub1} />
            <Route path="/sub2" exact component={Sub2} />
            <Route path="/sub3" exact component={Sub3} />
            <Route path="/sub4" exact component={Sub4} />
            <Route path="/letterList" exact component={Sub5} />
            <Route path="/sub6" exact component={Sub6} />
            <Route path="/login" exact component={Login} />
            <Route path="/babo" exact component={Babo} />
            <Redirect to="/main" />
          </Switch>
        </Store>
      </Container>
    </ROOT>
  );
};

export default App;
