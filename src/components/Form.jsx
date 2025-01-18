import { useState } from 'react'
import Recipe from './Recipe'
import IngredientList from './IngredientList'

function Form() {
    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false)
    
    
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function handleRecipeClick() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
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

            <IngredientList ingredients={ingredients} handleRecipeClick={handleRecipeClick} />
            
            

            {recipeShown && <Recipe />}
            
        </main>
    )
}

export default Form