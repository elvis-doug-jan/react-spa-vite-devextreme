import { createSlice } from '@reduxjs/toolkit'

export type userData = {
  name: string
  email: string
  avatarUrl: string
}

const defaultAvatarUrl = 'https://i.pravatar.cc/300'
const defaultUserName = 'User Teste'
const defaultUserEmail = 'user@email.com'

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: defaultUserName,
    email: defaultUserEmail,
    avatarUrl: defaultAvatarUrl
  },
  reducers: {
    setUserData: (state, { payload }) => {
      state.name = payload.name
      state.email = payload.email
      state.avatarUrl = payload.avatarUrl
      return state
    },
    clearUserData: state => {
      state.name = defaultUserName
      state.email = defaultUserEmail
      state.avatarUrl = defaultAvatarUrl
      return state
    }
  }
})

export const { setUserData, clearUserData } = slice.actions
export const userSelector = (state: { user: userData }) => state.user
export default slice.reducer
