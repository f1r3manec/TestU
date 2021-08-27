import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FundamentosIngenieria from "../components/pages/FundamentosIngenieria";
import HCI from "../components/pages/HCI";
import Home from "../components/pages/Home";
import RedesII from "../components/pages/RedesII";
import NavBar from "../components/ui/NavBar";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div className="columns is-multiline ">
        <Switch>
          <Route exatct path="/HCI" component={HCI} />
          <Route exact path="/FISotware" component={FundamentosIngenieria} />
          <Route exact path="/RedesII" component={RedesII} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
