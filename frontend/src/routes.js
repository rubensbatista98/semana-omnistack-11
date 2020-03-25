import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Logon from "./pages/Logon";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
