# GPT-Recipe Project

This project, inspired by the *Claude-Recipe* course from Scrimba, is built to learn and practice using **React** with a focus on **state management**. The application allows users to input ingredients and request a recipe. The ingredients are sent to OpenAI's API, which generates and returns a recipe, displayed on the screen.

---

## **Features**

- **Ingredient Input**: Users can type in multiple ingredients.
- **Recipe Generation**: The app sends the list of ingredients to OpenAI's API, which generates a unique recipe.
- **Dynamic State Management**: React's state is used to handle user input and update the UI with the generated recipe.

---

## **How It Works**

1. **User Input**:
   - Users enter ingredients into a text field.
   - The input is stored in the app's state.

2. **API Request**:
   - On clicking the "Get Recipe" button, the app sends the list of ingredients to OpenAI's API.

3. **Recipe Display**:
   - The API responds with a recipe based on the provided ingredients.
   - The recipe is rendered dynamically on the screen.

---

## **Tech Stack**:
   - **React**: For UI development and state management.
   - **OpenAI API**: To generate recipes based on ingredients.
   - **JavaScript**: The core programming language for logic and functionality.

---

## **Learning Highlights**
   - **State Management**: How to use React's useState hook to manage the state of the web pages.
   - **API Integration**: Sending requests to OpenAI's API and handling responses.
   - **Componentization**: Breaking the app into reusable and modular components.


## **Acknowledgments**
   - This project is based on the *Claude-Recipe* course by Scrimba.