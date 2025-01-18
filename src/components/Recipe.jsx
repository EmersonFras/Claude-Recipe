import React from 'react'

function Recipe({ recipe }) {

  return (
    <section>
        <h2>Chef GPT Recommends:</h2>
        <article className="suggested-recipe-container" aria-live="polite">
            {recipe}
        </article>
    </section>
  )
}

export default Recipe