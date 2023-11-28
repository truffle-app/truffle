import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser(_state, action) {
      return action.payload
    }
  }
})

export const { setUser } = userSlice.actions

export const initUsers = () => {
  return async (dispatch: Function) => {
    //const user = await userService.getUser()
    dispatch(setUser({}))
  }
}

export default userSlice.reducer
