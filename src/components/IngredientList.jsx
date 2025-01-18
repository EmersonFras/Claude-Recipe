import React from 'react'

function IngredientList({ ingredients, handleRecipeClick }) {
    const ingredientList = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))
    return (
        <section className="ingredient-list">
            <h2>Ingredients on hand:</h2>

            {ingredientList.length ? 
                <ul aria-live="polite">
                    {ingredientList}
                    {ingredientList.length < 3 && <p>Add {3-ingredientList.length} more ingredients...</p>}
                </ul>
                :
                <p>To get started add ingredients above...</p>    
            }
            {ingredientList.length >= 3 &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={handleRecipeClick}>Get a recipe</button>
                </div>
            }
        </section>

    )
}

export default IngredientList