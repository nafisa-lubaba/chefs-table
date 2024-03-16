import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = ({handleWantToCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        fetch('info.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, []

    )
    return (
        <div >
            <div className="md:w-2/3">
                    
                    {
                    recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}
                        handleWantToCook={handleWantToCook}
                    ></Recipe>)
                }

                </div>
                
            
        </div>
    );
};

export default Recipes;