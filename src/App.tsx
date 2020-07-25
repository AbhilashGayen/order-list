import React from "react";
import OrderPage from "./pages/order";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/orders" component={OrderPage} />
      </Switch>
    </>
  );
}

export default App;
