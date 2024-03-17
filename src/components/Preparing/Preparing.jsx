import PropTypes from 'prop-types';


const Preparing = ({prepare, i}) => {

    const {recipe_name, preparing_time, calories} = prepare;
    return (
        <div className='overflow-x-auto'>
        <table className='table bg-gray-100 my-3'>
            <tbody>
                <tr>
                    <td>
                        {i+1}
                    </td>
                    <td className='text-center'>
                        {recipe_name}
                    </td>
                    <td className='text-center'>
                        {preparing_time}
                    </td>
                    <td className='text-center'>
                        {calories}
                    </td>
                  
                </tr>
                
            </tbody>
        </table>
        
    

    </div>
    );
};

Preparing.propTypes ={
    prepare: PropTypes.object,

        recipe_name: PropTypes.string.isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
    i: PropTypes.number.isRequired

}


export default Preparing;