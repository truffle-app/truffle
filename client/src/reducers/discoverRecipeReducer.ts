import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit'
import recipeService from '../services/recipeService'
import { AppDispatch } from '../store'
import { RecipeObject } from '@types'

type State = RecipeObject[]

const set: CaseReducer<State, PayloadAction<RecipeObject[]>> = (
  _state,
  action
) => action.payload

const append: CaseReducer<State, PayloadAction<RecipeObject>> = (
  state,
  action
) => [...state, action.payload]

const discoverRecipeSlice = createSlice({
  name: 'discoverRecipes',
  initialState: [] as State,
  reducers: {
    setRecipes: set,
    appendRecipe: append
  }
})

export const { setRecipes, appendRecipe } = discoverRecipeSlice.actions

export const initRecipes = () => {
  return async (dispatch: AppDispatch) => {
    const recipes = await recipeService.getRecipes()
    dispatch(setRecipes(recipes))
  }
}

export default discoverRecipeSlice.reducer
