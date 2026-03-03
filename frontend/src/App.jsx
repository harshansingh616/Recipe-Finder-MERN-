import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import { searchRecipe } from "./services/recipeService";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";


function App() {

  useEffect(()=> {

    const fetchInitialRecipes = async ()=>
    {
      console.log("fetchiong initial data.....");
      const recipes = await searchRecipe('Pasta');
      console.log("fetched recipe", recipes);
    };

    fetchInitialRecipes();

  },[] );

  return (
    <div>
      <h1>Recipe Finder</h1>
      <p>Open the developer console to see the fetched recipe data!</p>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/recipe/:recipeId' element ={<RecipePage/>} />
      </Routes>
    </div>
  );
}

export default App;