import PropTypes from 'prop-types';
import { IoIosTimer } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({recipe}) => {
    
    const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        <div className='mx-10'>
            <img src={recipe_image} alt={`recipe_image for the recipe_name
                ${recipe_name}`} />
            <div>
                    <h1>{recipe_name}</h1>
                    <p>{short_description}  </p>
                    <h1 className='font-bold'>Ingredients:{ingredients.length}</h1>
                    <ul className='ml-5'>
                    { 
                    
                    ingredients.map((ingredient, idx) => (
                        <li key={idx}>{ingredient}</li>
                    ))}
                    </ul>
                    <hr className='border-dotted my-2' />
                    <div className='flex mb-3'>
                      <button className='text-2xl'><IoIosTimer /></button>
                      <p className='ml-4'>{preparing_time}</p>

                      <button className='text-2xl ml-4'><AiOutlineFire /></button>
                      <p className='ml-4'>{calories}</p>
                    
                     


                    </div>
                    <div>
                    <button 
                  className='btn bg-green-400 rounded-xl mb-4'>want to cook</button>
                    </div>

                    <div>

                    </div>
            </div>
            
            
        </div>
    );
};
Recipe.propTypes ={
    recipe: PropTypes.object.isRequired
}

export default Recipe;