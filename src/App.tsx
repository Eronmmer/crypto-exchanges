import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import ExchangePage from "./pages/ExchangePage";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/:id">
            <ExchangePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
