import PropTypes from 'prop-types';


const Wanttt = ({wanttt, i}) => {
    
    const {recipe_name, preparing_time, calories} = wanttt;
    // console.log('recipe')

    return (
        <div className='overflow-x-auto'>
            <table>
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
                        <td>
                        <button className='btn'>Preparing</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            
        
   
        </div>
    );
};
Wanttt.propTypes ={
    wanttt: PropTypes.object
}

export default Wanttt;