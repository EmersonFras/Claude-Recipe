import React from 'react'
import ReactMarkdown from 'react-markdown'

function Recipe({ recipe }) {

  return (
    <section>
        <h2>Chef GPT Recommends:</h2>
        <article className="suggested-recipe-container" aria-live="polite">
          <ReactMarkdown children={recipe} />
        </article>
    </section>
  )
}

export default Recipe