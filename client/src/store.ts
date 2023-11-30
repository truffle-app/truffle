import discoverRecipeReducer from './reducers/discoverRecipeReducer'
import feedRecipeReducer from './reducers/feedRecipeReducer'
import userRecipeReducer from './reducers/userRecipeReducer'
import bookmarkReducer from './reducers/bookmarkReducer'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    feedRecipes: feedRecipeReducer,
    discoverRecipes: discoverRecipeReducer,
    userRecipes: userRecipeReducer,
    bookmarks: bookmarkReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export default store
