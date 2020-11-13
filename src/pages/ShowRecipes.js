import Recipe from './Recipe';
import './RecipePage.css';
// import SearchBar from './SearchBar';
import './SearchBar.css';


function ShowRecipes({ result }){


    console.log(result)
    return(
        <> 
        <div>  
            <Recipe recipe={result} />  
          
        </div>
        </>
    )

}
export  default ShowRecipes