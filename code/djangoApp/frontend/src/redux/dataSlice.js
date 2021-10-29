import { createSlice } from '@reduxjs/toolkit'
import { getAllTournaments } from '../services/services';

const initialState = {
  tournaments : [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setTournaments : (state, action) => {
        state.tournaments = action.payload;
    },
    resetData: (state) => {
      state = {...initialState};
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTournaments, resetData } = dataSlice.actions

export default dataSlice.reducer
// export const fetchTournaments = () => async (dispatch) => {
//     const response = getAllTournaments();
//     dispatch(setTournaments(response.data))
// }