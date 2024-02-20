import logo from './logo.svg';
import './App.css';
import RecipeGallery from './component/RecipeGallery';
import { recipes } from './data/recipes';

function App() {
  return (
   <>
   <RecipeGallery data={recipes}/>
   </>
  );
}

export default App;
