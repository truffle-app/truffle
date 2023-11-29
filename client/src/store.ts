import recipeReducer from './reducers/recipeReducer'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export default store
