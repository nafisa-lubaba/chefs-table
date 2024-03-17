import PropTypes from 'prop-types';


const Wanttt = ({wanttt, i, handlePreparing}) => {
    
    const {recipe_name, preparing_time, calories} = wanttt;
    // console.log('recipe')

    return (
        <div className='overflow-x-auto'>
            <table className='table bg-gray-100 my-2'>
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
                        <td className=''>
                        <button onClick={() =>{handlePreparing(wanttt)
                        }} className='btn bg-green-400 pr-4'>Preparing</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            
        
   
        </div>
    );
};
Wanttt.propTypes ={
    wanttt: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired,
    handlePreparing: PropTypes.func.isRequired

}

export default Wanttt;