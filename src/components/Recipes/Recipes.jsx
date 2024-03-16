import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        fetch('info.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, []

    )
    return (
        <div>
            <div className="">
                    
                    {
                    recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
                }

                </div>
                
            
        </div>
    );
};

export default Recipes;