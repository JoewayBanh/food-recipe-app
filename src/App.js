import React from "react";
import "./App.css";
import Home from "./components/Home";
import Ingredients from "./components/Ingredients";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipePage from "./components/RecipePage";
import "./components/StylePage.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ingredients" component={Ingredients} />
          <Route path="/recipepage" component={RecipePage} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
