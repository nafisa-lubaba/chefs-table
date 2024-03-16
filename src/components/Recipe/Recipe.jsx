import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    
    const {recipe_name} = recipe;
    return (
        <div>
            <h1>{recipe_name}</h1>
            
        </div>
    );
};
Recipe.propTypes ={
    recipe: PropTypes.object.isRequired
}

export default Recipe;