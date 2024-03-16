
import { useState } from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Recipes from './components/Recipes/Recipes'
import Want from './components/Want/Want'




function App() {
  const [want, setWant] = useState([]);

  const handleWantToCook = (recipe) =>{
    const newWantCook = [...want, recipe];
    setWant(newWantCook);
  
  }

  
  return (
    <>
    <Header></Header>
    <Main></Main>
   <div className='md:flex'>
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Want want={want}></Want>
   
   
   </div>
     
    
     
    </>
  )
}

export default App
