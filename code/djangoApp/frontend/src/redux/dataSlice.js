import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { async } from 'regenerator-runtime';
import { getAllTournaments } from '../services/services';
// const fetchTournaments = createAsyncThunk(
//     'data/fetchTournaments', 
//     async (thunkAPI) => {
//         const response = await getAllTournaments();
//         return response.data;
//     })
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
//   extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(fetchTournaments.fulfilled, (state, action) => {
//       // Add user to the state array
//       state.tournaments = action.payload;
//     })
//   },
})

// Action creators are generated for each case reducer function
export const { setTournaments, setTransactions, resetData } = dataSlice.actions

export default dataSlice.reducer
// export const fetchTournaments = () => async (dispatch) => {
//     console.log("fetching tournaments");
//     // const response = getAllTournaments();
//     // console.log(response);
//     // dispatch(setTournaments(response.data))
// }