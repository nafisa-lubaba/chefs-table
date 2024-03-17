
import { useState } from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Recipes from './components/Recipes/Recipes'
import Want from './components/Want/Want'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  const [want, setWant] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const handleWantToCook = (recipe) => {
    const isExit = want.find(i => i.recipe_id == recipe.recipe_id)
    if (!isExit) {
      const newWantCook = [...want, recipe];
      setWant(newWantCook);
    }
    else {
      toast("Already Added");
    }
  }
  const handlePreparing = (recipes) => {
    setCurrentlyCooking([...currentlyCooking, recipes]);
    const updatedWant = want.filter(want => want.recipe_id !== recipes.recipe_id);
    setWant(updatedWant);
  };





  return (
    <div className='container mx-auto w-[90%]'>
      <Header></Header>
      <Main></Main>
      <div className='flex gap-10 mb-10'>
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Want want={want} handlePreparing={handlePreparing} currentlyCooking={currentlyCooking}></Want>
        <ToastContainer />
      </div>
    </div>
  )
}

export default App
