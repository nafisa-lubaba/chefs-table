import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Recipes from './components/Recipes/Recipes'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Main></Main>
   <Recipes></Recipes>
      
     
    
     
    </>
  )
}

export default App
