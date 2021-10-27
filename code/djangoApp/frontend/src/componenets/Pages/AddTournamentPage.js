import React from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Button, Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
// import './Home.css'

const cssMarginFlexTextAlign = {
  margin:'10px',
  display:'flex',
  textAlign:'center'
}

const AddTournamentPage = (props) => {
    return ( 
        <Stack sx={{
          alignItems: 'center',marginBottom:'80px'}}>
          <h2>Enter Tournament Name</h2>
          <Box sx={cssMarginFlexTextAlign}>
            <TextField id="outlined-basic" label="Tournament Name" variant="outlined" />
            </Box>
            <h2># Holes</h2>
            <Box sx={cssMarginFlexTextAlign} hint="0">
            <input style={{height:'50px'}} type="number"/>
            </Box>
            <h2>Dates</h2>
            <Box sx={cssMarginFlexTextAlign}>
                        <h3 style={{marginRight:'10px'}}>Begin Date</h3>

          <input style={{height:'50px'}} type="datetime-local" ></input>
          </Box>
          <Box sx={cssMarginFlexTextAlign}>
          <h3 style={{marginRight:'10px'}}>End Date </h3>
          <input style={{height:'50px'}} type="datetime-local" ></input>
          </Box>            
          <Box sx={cssMarginFlexTextAlign}>
          <Checkbox  />          
          <TextField id="outlined-basic" label="1st Place Reward Money Amount"/>
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
          <Button variant="outlined">Add Tournament</Button>
          </Box>
                    </Stack>
     );
}
 
export default AddTournamentPage;