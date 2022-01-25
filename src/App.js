import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Ingredients from "./components/Ingredients";
import Contact from "./components/Contact";
import RecipePage from "./components/RecipePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Ingredients" component={Ingredients} />
        <Route path="/Recipe-Page" component={RecipePage} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
