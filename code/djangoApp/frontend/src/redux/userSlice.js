import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: null,
  lastName: null,
  fullName: null,
  id: null,
  role: "player",
  permissions: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
    setDefaultUser: (state) => {
      return {...initialState};
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFirstName, setLastName, setFullName, setId, setRole, setPermissions, setDefaultUser } = userSlice.actions

export default userSlice.reducer