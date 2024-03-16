
import { useState } from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Recipes from './components/Recipes/Recipes'
import Want from './components/Want/Want'




function App() {
  const [want, setWant] = useState([]);

  const handleWantToCook = recipe =>{
    console.log('want to cook')
  }
  
  return (
    <>
    <Header></Header>
    <Main></Main>
   <div className='md:flex'>
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Want></Want>
   
   
   </div>
     
    
     
    </>
  )
}

export default App
