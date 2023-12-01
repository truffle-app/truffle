import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit'
import bookmarkService from '../services/bookmarkService'
import recipeService from '../services/recipeService'
import { Bookmark, RecipeObject } from '@types'
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

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: [] as State,
  reducers: {
    setBookmarks: set,
    appendBookmark: append
  }
})

export const { setBookmarks, appendBookmark } = bookmarkSlice.actions

export const initBookmarks = (userId: number) => {
  return async (dispatch: AppDispatch) => {
    const bookmarks = await bookmarkService.getBookmarks(userId)
    dispatch(setBookmarks(bookmarks))
  }
}

export const addBookmark = (bookmark: Bookmark) => {
  return async (dispatch: AppDispatch) => {
    const bm = await bookmarkService.addBookmark(bookmark)
    const recipe = await recipeService.getRecipe(bm.recipeId)
    dispatch(appendBookmark(recipe))
  }
}

export default bookmarkSlice.reducer
