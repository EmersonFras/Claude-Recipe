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

            <section className="ingredients-list">
                <h2>Ingredients on hand:</h2>

                {ingredientList.length ? 
                    <ul aria-live="polite">
                        {ingredientList}
                        {ingredientList.length < 3 && <p>Add {3-ingredientList.length} more ingredients...</p>}
                    </ul>
                    :
                    <p>To get started add ingredients above...</p>    
                }
            </section>
            {ingredientList.length >= 3 &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            }
            
        </main>
    )
}

export default Form