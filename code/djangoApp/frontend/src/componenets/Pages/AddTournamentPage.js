import React from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
// import './Home.css'
const AddTournamentPage = (props) => {
    return ( 
        <Container sx={{
          alignItems: 'center',}}>
          <h2>Enter Tournament Name</h2>
          <Box sx={{
              margin:'20px',
              display:'flex',
          }}>
            <TextField id="outlined-basic" label="Tournament Name" variant="outlined" />
            </Box>
            <h2># Holes</h2>
            <Box sx={{
              margin:'20px',
              display:'flex',
          }} hint="0">
            <input type="number"/>
            </Box>
            <h2>Dates</h2>
            <Box sx={{
              margin:'20px',
              display:'flex',
          }}>
                        <span>Begin Date   </span>

          <input type="datetime-local" ></input>
          </Box>
          <Box sx={{
              margin:'20px',
              display:'flex',
          }}>
          <span>End Date    </span>
          <input type="datetime-local" ></input>
          </Box>            
          <Box sx={{
              margin:'20px',
              display:'flex',
          }}>
          <Checkbox  />          
          <TextField id="outlined-basic" label="1st Place Reward Money Amount"/>
          </Box>
          <Box sx={{
              margin:'20px',
              display:'flex',
          }}>
          <Checkbox  />          
          <TextField id="outlined-basic" label="2nd Place Reward Money Amount"/>
          </Box>
          <Box sx={{
              margin:'20px',
              display:'flex',
          }}>
          <Checkbox  />          
          <TextField id="outlined-basic" label="3rd Place Reward Money Amount"/>
          </Box>
          <Box>
          <Button variant="outlined">Add Tournament</Button>
          </Box>
                    </Container>
     );
}
 
export default AddTournamentPage;