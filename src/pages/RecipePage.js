import React, { useState, useEffect } from 'react';
import './RecipePage.css';
import ShowRecipes from './ShowRecipes';
import Axios from 'axios';

function RecipePage() {
    const [query, setQuery] = useState("fish");
    const [recipes, setRecipes] = useState([]);


    const getBeef = () => {
        Axios.get(`https://api.edamam.com/search?q=${query}&app_id=439d148a&app_key=656b9f2c04daa032243be7bf3454c466`)
            .then(resp => setRecipes(resp.data.hits))
            // .then(console.log(recipes))

    };
    useEffect(() => { getBeef() }, [])
    console.log(recipes)
    return (
        <>
            <div className="container">
                <div className="flex-grid">
                    <aside className="sidebar-box-area">
                        <div className="top-image-sidebar"></div>
                        <h2 className="category-text">Category</h2>
                        <div className="images-container">
                            <div className="single-box-beef">
                                <div className="img-area"></div>
                                <div className="img-text"></div>
                                {/* <button onClick={()=>e.target.value.data}> */}
                                <span className="header-text"><strong>Beef</strong></span>
                                {/* </button> */}
                            </div>
                            {/*you should wrap the category between a button tag. 
                                            onClick= make the api call depending 
                                            on the category and charge the state  */}

                            <div className="single-box-fish">
                                <div className="img-area"></div>
                                <div className="img-text"></div>
                                <span className="header-text"><strong>Fish</strong></span>
                            </div>
                            <div className="single-box-vegetables">
                                <div className="img-area"></div>
                                <div className="img-text"></div>
                                <span className="header-text"><strong>Vegetables</strong></span>

                            </div>
                            <div className="single-box-fruit">
                                <div className="img-area"></div>
                                <div className="img-text"></div>
                                <span className="header-text"><strong>Fruit</strong></span>

                            </div>
                            <div className="single-box-pork">
                                <div className="img-area"></div>
                                <div className="img-text"></div>
                                <span className="header-text"><strong>Pork</strong></span>

                            </div>
                            <div className="single-box-chicken">
                                <div className="img-area"></div>
                                <div className="img-text"></div>
                                <span className="header-text"><strong>Chicken</strong></span>

                            </div>
                        </div>


                    </aside>


                    <div className="main">
                        {/* map to the state and display the ShowRecipes component and pass the state to him with the spread operator
                        <ul>
                             {beef.map(results => <li>{results.label}</li>)}
                        </ul> */ }

                        {recipes.map(result => <ShowRecipes result={result} />)}                        

                        <div className="show-recipes"></div>



                    </div>



                </div>
            </div>





        </>
    );

}
export default RecipePage