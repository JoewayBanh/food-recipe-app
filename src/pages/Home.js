import React, {Component} from 'react';
import './StylePage.css';
import Navbar from './NavBar';
import FrontBtns from './FrontBtns';
import { NavLink } from 'react-router-dom'



function Home() {
    
        return (
          
         <div className="home-page">    
            {/* <Navbar />    */}
            <FrontBtns />
        
         {/* <div className="div-ingredients-btn">
             <NavLink exact to='/Ingredients'><button className="front-btn">Ingredients</button></NavLink>
             <NavLink exact to='/RecipePage'><button className="front-btn">Recipes</button></NavLink>
         </div> 
          */}
         </div>


        );
      
    }

    export default Home