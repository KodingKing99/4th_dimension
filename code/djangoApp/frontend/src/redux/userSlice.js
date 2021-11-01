import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: null,
  lastName: null,
  fullName: null,
  id: null,
  role: "player",
  email: null,
  permissions: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.fullName = action.payload.fullName
      state.id = action.payload.id
      state.role = action.payload.role
      state.email = action.payload.email
      state.permissions = action.payload.permissions
    },
    setFirstName : (state, action) => {
        state.firstName = action.payload;
    },
    setLastName : (state, action) => {
        state.lastName = action.payload;
    },
    setFullName : (state, action) => {
        state.fullName = action.payload;
    },
    setId: (state, action) => {
        state.id = action.payload;
    },
    setRole: (state, action) => {
        state.role = action.payload;
    },
    setPermissions: (state, action) => {
        state.permissions = action.payload;
    },
    resetUser: (state) => {
      return {...initialState};
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFirstName, setLastName, setFullName, setId, setRole, setPermissions, resetUser, setUser } = userSlice.actions;

export default userSlice.reducer