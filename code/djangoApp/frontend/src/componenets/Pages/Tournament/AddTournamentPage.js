import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Button, Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { createTournament } from "../../../services/services";
import { Snackbar } from "@material-ui/core";
// import './Home.css'

const cssMarginFlexTextAlign = {
  margin:'10px',
  display:'flex',
  textAlign:'center'
}

const AddTournamentPage = (props) => {
  const [sponsorid, setSponsorId] = useState();
  const [date, setDate] = useState();
  const [holecnt, setHoleCnt] = useState();
  const [prize, setPrize] = useState();
  const [snackbarOpen, setSnackBarOpen] = useState(false);
  const [snackbarMsg, setSnackBarMsg] = useState("Sucessfully created tournament");
  const handleSubmit = (e) => {
   console.log("submitting...")
  e.preventDefault();
  // setting sponsor id to 1 for now. TAKE OUT later
  setSponsorId(1);
  // Error handling
  if(!sponsorid || !date || !holecnt || !prize){
    console.log("Error: Failed to create tournament")
    setSnackBarMsg("failed to create tournament");
    return;
  }
  console.log("submitting...")
  console.log(`sponsor id:`)
  console.log(sponsorid)
  console.log(`date:`)
  console.log(date)
  console.log(`hole count:`)
  console.log(holecnt)
  console.log(`prize:`)
  // formatting for post
  setPrize(prize + ".00")
  console.log(prize)
  createTournament(date, sponsorid, prize, holecnt);
  setSnackBarMsg("Sucesfully created Tournament");
  setSnackBarOpen(true);
}
    return (
      <>
      <Snackbar 
      open={snackbarOpen}
      onClose={() => {setSnackBarOpen(false)}}
      message={snackbarMsg}
      autoHideDuration={3000}
      />
      <form>

        <Stack sx={{
          alignItems: 'center',marginBottom:'80px'}}>
          <h2>Enter Tournament Name</h2>
          <Box sx={cssMarginFlexTextAlign}>
            <TextField id="outlined-basic" label="Tournament Name" variant="outlined"/>
            </Box>
            <h2># Holes</h2>
            <Box sx={cssMarginFlexTextAlign} hint="0">
            <input style={{height:'50px'}} type="number" onChange={(e) => setHoleCnt(e.target.value)} required/>
            </Box>
            <h2>Dates</h2>
            <Box sx={cssMarginFlexTextAlign}>
                        <h3 style={{marginRight:'10px'}}>Begin Date</h3>

          <input style={{height:'50px'}} type="datetime-local" onChange={(e) => setDate(e.target.value)} required></input>
          </Box>
          <Box sx={cssMarginFlexTextAlign}>
          <h3 style={{marginRight:'10px'}}>End Date </h3>
          <input style={{height:'50px'}} type="datetime-local" ></input>
          </Box>            
          <Box sx={cssMarginFlexTextAlign}>
          <Checkbox  />          
          <TextField id="outlined-basic" label="1st Place Reward Money Amount" type="number" onChange={(e) => setPrize((e.target.value))}/>
          </Box>
          <Box sx={cssMarginFlexTextAlign}>
          <Checkbox  />          
          <TextField id="outlined-basic" label="2nd Place Reward Money Amount"/>
          </Box>
          <Box sx={cssMarginFlexTextAlign}>
          <Checkbox  />          
          <TextField id="outlined-basic" label="3rd Place Reward Money Amount"/>
          </Box>
          <Box>
          <Button variant="outlined" type={"submit"} onClick={handleSubmit}>Add Tournament</Button>
          </Box>
                    </Stack>
      </form>
    </>
     );
}
 
export default AddTournamentPage;