import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Dashboard from "./components/DashBoard";
import NewSurvey from './components/surveys/NewSurvey';
import allActions from "./actions/index";
import { useDispatch } from "react-redux";
import axios from "axios";
window.axios = axios;


const NotFound = () => <h2>Not Found</h2>;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.authAction.fetchAuthData());
    dispatch(allActions.surveyAction.fetchSurvey());
  }, [dispatch]);

  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/news" component={NewSurvey} />
          <Route exact path="/notfound" component={NotFound} />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
