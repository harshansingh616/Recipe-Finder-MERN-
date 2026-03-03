import axios from "axios";

const API_URL = import.meta.env.VITE_RECIPE_API_URL;

const recipeApi = axios.create({

    baseURL : API_URL,

})

export const searchRecipe = async(query)=> {
    try{
        const response = await recipeApi.get(`/search.php?s=${query}`);

        return response.data.meals || [];
    }catch(error)
    {
        console.error('Error fetching recipes:', error);
        return [];
    }
}


export default recipeApi;