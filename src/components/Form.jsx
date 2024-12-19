import { useState } from 'react'

function Form() {
    const [ingredients, setIngredients] = useState([]);
    

    const ingredientList = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
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

            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}

export default Form