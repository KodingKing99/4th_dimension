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
    editStoreTournament: (state, action) => {
      let index = state.tournaments.findIndex((tourney) => {
        return tourney.tournamentid === action.payload.tournamentid
      });
      state.tournaments[index] = action.payload;
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
export const { setTournaments, setTransactions, resetData, addTournament, editStoreTournament } = dataSlice.actions

export default dataSlice.reducer