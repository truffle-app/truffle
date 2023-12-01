import { createSlice } from '@reduxjs/toolkit'
import { User } from '@types'

type State = User

const userSlice = createSlice({
  name: 'user',
  initialState: {} as State,
  reducers: {
    setUser(_state, action) {
      return action.payload
    }
  }
})

export const { setUser } = userSlice.actions

export const initUser = (user: User) => {
  return async (dispatch: Function) => {
    dispatch(setUser(user))
  }
}

export default userSlice.reducer
