import React,{useState} from "react";
import SearchBar from "../components/SearchBar";
import { searchRecipe } from "../services/recipeService";


const HomePage = () =>
{
    const [recipe, setRecipe] = useState([]);

    const handleSearch = async(query)=>
    {
        console.log(`Searching for recipe with query ${query}`);

        const reasult = await searchRecipe(query);

        setRecipe(result);
    }

    return (
        <div>
            <SearchBar onSearch='handlleSearch'/>
            <h1>Recipe Home Page</h1>
            <p>Search your recipe here</p>
        </div>
    );
};
export default HomePage;