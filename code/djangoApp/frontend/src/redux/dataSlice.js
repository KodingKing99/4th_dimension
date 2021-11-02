import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { async } from 'regenerator-runtime';
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
    addTournament: (state, action) => {
      state.tournaments.push(action.payload);
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
export const { setTournaments, setTransactions, resetData, addTournament } = dataSlice.actions

export default dataSlice.reducer