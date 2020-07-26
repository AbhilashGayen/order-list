import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Header from "./components/header/header";

//Pages
import OrderPage from "./pages/order";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/orders" component={OrderPage} />
      </Switch>
    </>
  );
}

export default App;
