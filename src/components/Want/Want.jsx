import PropTypes from 'prop-types'
import Wanttt from '../Wanttt/Wanttt';

const Want = ({want}) => {
    return (
        <div className="md:w-1/3">
            <h1 className="text-2xl">Want to cook:{want.length}</h1>
            <div className='overflow-x-auto'>
            <table>
                <thead>
                    <th className='text-center'>
                        Name
                    </th>
                    <th>
                        Time
                    </th>
                    <th>
                        celories
                    </th>
                </thead>
                
            </table>

            </div>
            

          {
            want.map((wanttt, i) => <Wanttt key={wanttt.recipe_id} 
                wanttt={wanttt} i={i}></Wanttt>)
          }
            
        </div>
    )
}
Want.propTypes ={
    want: PropTypes.array
}

export default Want;