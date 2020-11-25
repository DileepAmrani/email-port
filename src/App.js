import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login,  CreateCampaign, CreateList, Dashboard, SubscriberList } from "./Container"
import './App.css';

function App() {
  return (
    <section className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route  path="/createlist" component={CreateList} />
          <Route  path="/createnew" component={CreateCampaign} />
          <Route  path="/dashboard" component={Dashboard} />
          <Route  path="/subscriber-list" component={SubscriberList} />
        </Switch>
      </Router>
    </section>
  );
}

export default App;
