import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Header from "./components/header/header";

//Pages
import OrderPage from "./pages/order";
import ConstructionPage from "./pages/construction";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/orders" component={OrderPage} />
        <Route exact path="/dashboard" component={ConstructionPage} />
        <Route exact path="/customers" component={ConstructionPage} />
        <Route exact path="/inventory" component={ConstructionPage} />
        <Route exact path="/settings" component={ConstructionPage} />
      </Switch>
    </>
  );
}

export default App;
