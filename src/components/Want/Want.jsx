import PropTypes from 'prop-types'
import Wanttt from '../Wanttt/Wanttt';
import Preparing from '../Preparing/Preparing';

const Want = ({ want, handlePreparing, currentlyCooking}) => {
    return (
        <div className="w-[40%] border rounded-lg border-gray-200">
            <h1 className="text-xl ml-4 mt-4 font-bold text-orange-700 text-center">Want to cook:{want.length}</h1>
            <hr className='border-dotted my-2' />
            <div className='overflow-x-auto'>
                <table className='table'>
                    <thead>
                        <th className='text-center text-xl'>
                            Name
                        </th>
                        <th className='text-center text-xl'>
                            Time
                        </th>
                        <th className='text-center text-xl'>
                        Calories
                        </th>
                        
                    </thead>

                </table>

            </div>


            {
                want.map((wanttt, i) => <Wanttt key={wanttt.recipe_id}
                    wanttt={wanttt} handlePreparing={handlePreparing} i={i}></Wanttt>)
            }
            <div>
                <h1 className='text-xl ml-4 mt-4 font-bold text-orange-700 text-center'>Currently cooking:{currentlyCooking.length}</h1>
                <hr className='border-dotted my-2' />
                <div className='overflow-x-auto'>
                    <table className='table'>
                        <thead>
                            <th className='text-center text-xl'>
                                Name
                            </th>
                            <th className='text-center text-xl'>
                                Time
                            </th>
                            <th className='text-center text-xl'>
                            Calories
                            </th>
                        </thead>

                    </table>

                </div>
                {
                    currentlyCooking.map((prepare,i) =><Preparing key={prepare.recipe_id}
                    
                    prepare={prepare} i={i}></Preparing>) 
                }
            </div>

        </div>
    )
}
Want.propTypes = {
    want: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func.isRequired,
    currentlyCooking: PropTypes.array.isRequired

}


export default Want;