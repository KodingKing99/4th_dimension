import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { async } from 'regenerator-runtime';
import { getAllTournaments } from '../services/services';
const initialState = {
  tournaments : [],
  transactions: [],
  users: [],
  menu: [],
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
    // Takes a tournament id as a payload
    deleteStoreTournament: (state, action) => {
      state.tournaments = state.tournaments.filter((tourney) => {
        return tourney.tournamentid !== action.payload
      });
    },
    editStoreUser: (state, action) => {
      let index = state.users.findIndex((user) => {
        return user.userid === action.payload.userid;
      });
      state.users[index] = action.payload;
    },
    deleteStoreUser: (state, action) => {
      state.users = state.users.filter((user) => {
        return user.userid != action.payload;
      });
    },
    setTransactions : (state, action) => {
        state.transactions = action.payload;
    },
    setMenu : (state, action) => {
        state.menu = action.payload;
    },
    resetData: (state) => {
      state = {...initialState};
    },
    setUserList: (state, action) => {
      state.users = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTournaments, setTransactions, resetData, addTournament, editStoreTournament, deleteStoreTournament, setMenu, setUserList, deleteStoreUser, editStoreUser } = dataSlice.actions

export default dataSlice.reducer