import { createStore } from "redux"

let initialState = {
  name: "",
  category: "",
  authorFirst: '',
  authorLast: '',
  ingredients: [],
  instructions: [],
  recipes: []
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST"
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST"
export const ADD_INGREDIENT = "ADD_INGREDIENT"
export const ADD_INSTRUCTIONS = "ADD_INSTRUCTIONS"
export const ADD_RECIPE = "ADD_RECIPE"
export const RESET = "RESET"
export const DELETE = "DELETE"

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload }
    case UPDATE_CATEGORY:
      return { ...state, category: payload }
    case UPDATE_AUTHOR_FIRST:
      return { ...state, authorFirst: payload }
    case UPDATE_AUTHOR_LAST:
      return { ...state, authorLast: payload }
    case ADD_INGREDIENT:
      const newIngredients = [...state.ingredients, payload]
      return { ...state, ingredients: newIngredients }
    case ADD_INSTRUCTIONS:
      const newInstructions = [...state.instructions, payload]
      return { ...state, instructions: newInstructions }
    case ADD_RECIPE:
      const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      } = state
      const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      }
      const newRecipe = [...state.recipes, recipe]
      return { ...state, recipes: newRecipe }
    case RESET:
      return { ...state, name: "", category: "", authorFirst: "", authorLast: "", ingredients: [], instructions: [] }
    case DELETE:
      state.recipes.splice(payload,1)
      return {...state, recipes:state.recipes} 
    
    default:
      return state
  }
}


export default createStore(reducer)