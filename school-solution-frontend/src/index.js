import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import hist from "./helper/history"
import "bootstrap/dist/css/bootstrap.css";
// import 'materialize-css/dist/css/materialize.min.css';
import "./assets/scss/now-ui-dashboard.css";
import "./assets/css/demo.css";
import axios from "axios";
import { isAuthenticated } from "./helper/authenticated";
import indexRoutes from "./routes/index.jsx";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./store/reducers";

const token = isAuthenticated().token;
axios.defaults.headers.common = {
  "x-auth-token": token
}

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} key={key} component={prop.component} />
          );
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
