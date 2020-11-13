import React from 'react';
import './App.css';
import Burger from './pages/Burger';
import Navbar from './pages/NavBar';
import Home from './pages/Home';
import Ingredients from './pages/Ingredients';
import Recipe from './pages/RecipePage';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipePage from './pages/RecipePage';
import './pages/StylePage.css';

function App() {
  
  
  return (
    <Router>
      <div className="App">
      {/* <Navbar /> */}
        {/*  <RecipePage />  */}    
         
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ingredients" component={Ingredients} />
            <Route path="/recipepage" component={RecipePage}/>
            <Route path="/contact" component={Contact} />         
          
          </Switch>


      </div>
    </Router>
  );
}

export default App;
