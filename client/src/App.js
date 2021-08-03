import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import allActions from "./actions/index";
import { useDispatch } from 'react-redux'

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const NotFound = () => <h2>Not Found</h2>;

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.authAction.fetchAuthData());
  }, [dispatch])

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/news" component={SurveyNew} />
          <Route exact path="/notfound" component={NotFound} />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
