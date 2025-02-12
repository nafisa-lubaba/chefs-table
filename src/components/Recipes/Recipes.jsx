import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types'


const Recipes = ({ handleWantToCook }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('info.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []

    )
    return (

        <div className="w-[60%] grid grid-cols-2 gap-10">

            {
                recipes.map(recipe => <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleWantToCook={handleWantToCook}
                ></Recipe>)
            }

        </div>

    );
};
Recipes.propTypes = {
    handleWantToCook: PropTypes.func
}

export default Recipes;