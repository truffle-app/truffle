import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit'
import recipeService from '../services/recipeService'
import { AppDispatch } from '../store'

type State = RecipeObject[]

const set: CaseReducer<State, PayloadAction<RecipeObject[]>> = (
  _state,
  action
) => action.payload

const append: CaseReducer<State, PayloadAction<RecipeObject>> = (
  state,
  action
) => [...state, action.payload]

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: [] as State,
  reducers: {
    setRecipes: set,
    appendRecipe: append
  }
})

export const { setRecipes, appendRecipe } = recipeSlice.actions

export const initRecipes = () => {
  return async (dispatch: AppDispatch) => {
    const recipes = await recipeService.getRecipes()
    dispatch(setRecipes(recipes))
  }
}

export default recipeSlice.reducer
