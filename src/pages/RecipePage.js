import React, { useState, useEffect } from 'react';
import './RecipePage.css';
import './SearchBar.css';
import ShowRecipes from './ShowRecipes';
import Axios from 'axios';
import Navbar from './NavBar';
import Alert from './Alert';


function RecipePage() {
    const [query, setQuery] = useState("strawberry");
    const [recipes, setRecipes] = useState([]);
    const[ search, setSearch ] = useState("");

    const getRecipes = () => {
        Axios.get(`https://api.edamam.com/search?q=${query}&app_id=439d148a&app_key=656b9f2c04daa032243be7bf3454c466`)
            .then(resp => setRecipes(resp.data.hits))

    };
    useEffect(() => { getRecipes() }, [query])
    console.log(recipes)

    const onChange=(e)=>{
        setSearch(e.target.value);
        };
        
        const onSubmit =(e)=>{
          e.preventDefault();
          setQuery(search)
          setSearch("");
        };


    return (
        <>
        {/*BEGIN SEARCH BAR */}      

        {/* <div className="App"> */}
        <div className="search-bar">
          <div className="search-container">
            <form className="search-form" onSubmit={onSubmit}>
                { alert !== "" && <Alert alert={alert}/>}
                  <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={search}/>
                     <input type="submit" value="search"/>
             </form>
             <Navbar/>
         </div>
        </div>  

        {/*END SEARCH BAR */}      

            <div className="container">
                <div className="flex-grid">
                    <aside className="sidebar-box-area">
                        <div className="top-image-sidebar"></div>
                        <h2 className="category-text">Category</h2>
                        <div className="images-container">
                            <div className="single-box-beef" onClick={()=> setQuery("beef")}>
                                <div className="img-area"></div>
                                <div className="img-text"></div>
                                <span className="header-text"><strong>Beef</strong></span>                                
                            </div>                       

                            <div className="single-box-fish" onClick={()=> setQuery("fish")}>
                                <div className="img-area"></div>
                                <div className="img-text"></div>
                                <span className="header-text"><strong>Seafood</strong></span>
                            </div>
                            <div className="single-box-vegetables" onClick={() => setQuery("vegetables")}>
                                <div className="img-area"></div>
                                <div className="img-text"></div>
                                <span className="header-text"><strong>Vegetables</strong></span>

                            </div>
                            <div className="single-box-fruit" onClick={() => setQuery("fruit")}>
                                <div className="img-area"></div>
                                <div className="img-text"></div>
                                <span className="header-text"><strong>Fruit</strong></span>

                            </div>
                            <div className="single-box-pork" onClick={() => setQuery("pork")}>
                                <div className="img-area"></div>
                                <div className="img-text"></div>
                                <span className="header-text"><strong>Pork</strong></span>

                            </div>
                            <div className="single-box-chicken" onClick={() => setQuery("poultry")}>
                                <div className="img-area"></div>
                                <div className="img-text"></div>
                                <span className="header-text"><strong>Poultry</strong></span>
                            </div>
                        </div>
                    </aside>


                    {/* <div className="main"> */}
                    <div className="recipes">
                        {/* map to the state and display the ShowRecipes component and pass the state to him with the spread operator
                       */ }

                        {recipes.map(result => 
                        <ShowRecipes result={result} />)}                   

                    </div>



                </div>
            </div>





        </>
    );

}
export default RecipePage