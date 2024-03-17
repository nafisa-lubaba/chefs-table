import PropTypes from 'prop-types';
import { IoIosTimer } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({recipe, handleWantToCook}) => {
    
    const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        <div className='card bg-base-100 shadow-xl rounded-lg border border-gray-200'>
            
           <figure className=''>
           <img className='rounded-xl px-5 pt-5' src ={recipe_image} alt={`recipe_image for the recipe_name
                ${recipe_name}`} />
           </figure>
            <div className='card-body'>
                    <h1 className='text-xl font-bold'>{recipe_name}</h1>
                    <p className='text-[#878787]'>{short_description}  </p>
                    <hr className='border-dotted my-2' />
                    <h1 className='font-bold'>Ingredients:{ingredients.length}</h1>
                    {/* <ul className='ml-5'> */}
                    { 
                    
                    ingredients.map((ingredient, idx) => (
                        <li className='ml-5 text-[#878787]' key={idx}>{ingredient}</li>
                    ))}
                    {/* </ul> */}
                    <hr className='border-dotted my-2' />
                    <div className='flex justify-between mb-3'>
                      <button className='text-xl'><IoIosTimer /></button>
                      <p className='ml-2'>{preparing_time}</p>

                      <button className='text-xl'><AiOutlineFire /></button>
                      <p className='ml-2'>{calories}</p>
                    
                     


                    </div>
                    <div>
                    <button onClick={() =>{handleWantToCook(recipe)} }
                  className='btn bg-green-400 rounded-2xl mb-4'>want to cook</button>
                    </div>

                    <div>

                    </div>
            </div>
            
            
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    recipe_name: PropTypes.string.isRequired,
    recipe_image: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    preparing_time: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    handleWantToCook: PropTypes.func
};


export default Recipe;