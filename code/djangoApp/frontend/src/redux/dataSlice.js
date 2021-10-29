import { createSlice } from '@reduxjs/toolkit'
import { getAllTournaments } from '../services/services';

const initialState = {
  tournaments : [],
  transactions: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setTournaments : (state, action) => {
        state.tournaments = action.payload;
    },
    setTransactions : (state, action) => {
        state.transactions = action.payload;
    },
    resetData: (state) => {
      state = {...initialState};
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTournaments, setTransactions, resetData } = dataSlice.actions

export default dataSlice.reducer
// export const fetchTournaments = () => async (dispatch) => {
//     const response = getAllTournaments();
//     dispatch(setTournaments(response.data))
// }