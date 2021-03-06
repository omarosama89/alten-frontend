import React from "react";
import CustomersIndexPage from "./customers/IndexPage";
import VehiclesIndexPage from "./vehicles/IndexPage";
import Header from "./common/Header";
import NotFoundPage from "./NotFoundPage";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <div className="page-content">
        <div className="row">
          <div className="column side">
            <Header />
          </div>
          <div className="column middle">
            <Switch>
              <Route path="/" exact component={CustomersIndexPage} />
              <Route path="/vehicles" exact component={VehiclesIndexPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
