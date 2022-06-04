import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AdmBDD } from "../components/pages/AdmBDD";
import DesarrolloWeb from "../components/pages/DesarrolloWeb";
import FundamentosIngenieria from "../components/pages/FundamentosIngenieria";
import GestionCalidad from "../components/pages/GestionCalidad";
import HCI from "../components/pages/HCI";
import Home from "../components/pages/Home";
import Ing_Requisitos from "../components/pages/Ing_Requisitos";
import MetodologiasD from "../components/pages/MetodologiasDesarrollo";
import { PlanificacionEst } from "../components/pages/PlanificacionEstrategica";
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
          <Route exact path="/ADMBDD" component={AdmBDD} />
          <Route exact path="/Ing_Requisitos" component={Ing_Requisitos} />
          <Route exact path="/DesarrolloWeb" component={DesarrolloWeb} />
          <Route exact path="/GestionCalidad" component={GestionCalidad} />
          <Route
            exact
            path={"/PlanificacionEstrategica"}
            component={PlanificacionEst}
          />
          <Route
            exact
            path="/MetodologiasDesarrollo"
            component={MetodologiasD}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
