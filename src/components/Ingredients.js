import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';
// import './RecipePage.css';
import ShowRecipes from './ShowRecipes';
import Axios from 'axios';
import Alert from './Alert';
import IngrBtns from './IngrBtns';
import './IngBtns.css';
import './RecipePage.css';
import './SearchBar.css';
const vegetables = ['tomato', 'turnip', 'sweet potato', 'onion', 'mushroom', 'shallot', 'pumpkin', 'chili', 'paprika', 'spring onion']
const poultry = ['chicken wings', 'drumsticks', 'chicken breast', 'chicken thighs', 'duck', 'turkey','goose','guinea fowl','pigeon','donald duck']
const pork = ['bacon', 'ham', 'pork fillet', 'pork ribs', 'pork loin', 'pork chops', 'minced pork', 'pork sausage','tenderloin', 'loin roast']
const beef = ['minced beef', 'beef ribs', 'beef steak', 'beef patty', 'beef shank', 'brisket', 'oxtail', 'picanha', 'rib steak',' t-bone']
const seafood = ['salmon', 'tuna', 'shrimp','mackerel','herring','anchovy','moi','oyster','sea urchin','shrimp']
const fruit = ['apple', 'kiwi', 'banana', 'blueberry', 'strawberry', 'mango', 'orange', 'pear', 'lemon', 'grapefruit']
// const dairy = ['gouda', 'feta', 'gruyere', 'brie', 'parmesan', 'blue cheese', 'cheddar', 'mozzarella', 'cottage cheese', 'yogurt', 'mascarpone', 'milk', 'buttermilk', 'butter', 'margarine', 'cream', 'cream fraiche', 'kefir', 'curd cheese', 'oat milk', 'whipped cream']
// const sides = ['rice', 'oat', 'couscous', 'buckwheat', 'chickpeas', 'black-eyed pea', 'kidney beans', 'pasta', 'spaghetti', 'barley', 'brown peas', 'nuts']
// const breads = ['white bread', 'sourdough bread', 'rye bread', 'whole wheat bread', 'pita', 'ciabatta', 'naan', 'whole grain bread', 'roll bread']
function Ingredients() {
    const [query, setQuery] = useState("lunch");
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState([]);
    const getRecipes = () => {
        Axios.get(`https://api.edamam.com/search?q=${query}&app_id=439d148a&app_key=656b9f2c04daa032243be7bf3454c466`)
            .then(resp => setRecipes(resp.data.hits))
    };
    useEffect(() => { getRecipes() }, [query])
    const onChange = (e) => {
        setSearch(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setQuery(search)
    };
    const getValueFromChild = (valueFromChild) => {
        //  setSearch(valueFromChild.concat("?" + search))
        switch (valueFromChild) {
            // case !search.includes(valueFromChild):
            //     setSearch(valueFromChild)
            //     break;
            case search.includes(valueFromChild):
                setSearch((search.replace(valueFromChild, "")));
                break;
            default:
                console.log("THIS IS SEARCH: " + search);
                setSearch(valueFromChild)
        }
        // if (search.includes(valueFromChild)){
        //     setSearch((search.replace(valueFromChild, "")))
        //     // console.log(typeof(search));
        //     console.log("SEARCH: " +search)
        //     console.log("IF STATEMENT WAS PROCCED");
        // } else{
        //     setSearch(valueFromChild)
        //     // console.log("this is valueFromChild: "+ valueFromChild);
        //     console.log(search);
        //     console.log("ELSE STATEMENT WAS PROCCED");
        // }
    }
    return (
        <>
            {/* <div className="App"> */}
            <div className="search-bar">
                <div className="search-container">
                    <form className="search-form" onSubmit={onSubmit}>
                        {alert !== "" && <Alert alert={alert} />}
                        <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={search} />
                        <input type="submit" value="search" />
                    </form>
                    <Navbar/>

                </div>
            </div>
            <div className="container">
                <div className="flex-grid">
                    <aside className="sidebar-box-area">
                        <div className="top-image-sidebar1"></div>
                        <h2 className="category-text">Ingredients</h2>
                        <div className="images-container">
                            <div>
                                <div className="single-box-beef1" onClick={() => setQuery("beef")}>
                                    <div className="img-area"></div>
                                    <div className="img-text"></div>
                                    <span className="header-text"><strong>Beef</strong></span>
                                </div>
                                {beef.map((elem) => (
                                    <IngrBtns val={elem} setSearch={setSearch} search={search} handlePassInfoToParent={getValueFromChild} />
                                ))}
                            </div>
                            {/* onChange={(event) => setPrice(event.target.value)} */}
                            <div>
                                <div className="single-box-fish1" onClick={() => setQuery("fish")}>
                                    <div className="img-area"></div>
                                    <div className="img-text"></div>
                                    <span className="header-text"><strong>Seafood</strong></span>
                                </div>
                                {seafood.map((elem) => (
                                    <IngrBtns val={elem} setSearch={setSearch} search={search} handlePassInfoToParent={getValueFromChild} />
                                ))}
                            </div>
                            <div>
                                <div className="single-box-vegetables1" onClick={() => setQuery("vegetables")}>
                                    <div className="img-area"></div>
                                    <div className="img-text"></div>
                                    <span className="header-text"><strong>Vegetables</strong></span>
                                </div>
                                {vegetables.map((elem) => (
                                    <IngrBtns val={elem} setSearch={setSearch} search={search} handlePassInfoToParent={getValueFromChild} />
                                ))}
                            </div>
                            <div>
                                <div className="single-box-fruit1" onClick={() => setQuery("fruit")}>
                                    <div className="img-area"></div>
                                    <div className="img-text"></div>
                                    <span className="header-text"><strong>Fruit</strong></span>
                                </div>
                                {fruit.map((elem) => (
                                    <IngrBtns val={elem} setSearch={setSearch} search={search} handlePassInfoToParent={getValueFromChild} />
                                ))}
                            </div>
                            <div>
                                <div className="single-box-pork1" onClick={() => setQuery("pork")}>
                                    <div className="img-area"></div>
                                    <div className="img-text"></div>
                                    <span className="header-text"><strong>Pork</strong></span>
                                </div>
                                {pork.map((elem) => (
                                    <IngrBtns val={elem} setSearch={setSearch} search={search} handlePassInfoToParent={getValueFromChild} />
                                ))}
                            </div>
                            <div>
                                <div className="single-box-chicken1" onClick={() => setQuery("chicken")}>
                                    <div className="img-area"></div>
                                    <div className="img-text"></div>
                                    <span className="header-text"><strong>Poultry</strong></span>
                                </div>
                                {poultry.map((elem) => (
                                    <IngrBtns val={elem} setSearch={setSearch} search={search} handlePassInfoToParent={getValueFromChild} />
                                ))}
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
export default Ingredients