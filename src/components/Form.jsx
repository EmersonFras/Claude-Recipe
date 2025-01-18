import { useState } from 'react'
import Recipe from './Recipe'
import IngredientList from './IngredientList'
import { getRecipeFromChefGPT } from './ai'

function Form() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState('')
    
    
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        const recipeMrkDwn = await getRecipeFromChefGPT(ingredients)
        setRecipe(recipeMrkDwn)
    }

    return (
        <main>
            <form action={addIngredient} className='ingredient-form'>
                <input 
                    type='text' 
                    placeholder='e.g. oregano' 
                    aria-label='Add Ingredient'
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>

            <IngredientList ingredients={ingredients} getRecipe={getRecipe} />
            
            

            {recipe && <Recipe recipe={recipe} />}
            
        </main>
    )
}

export default Form