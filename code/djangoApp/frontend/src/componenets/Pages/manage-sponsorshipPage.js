import React from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
// import './Home.css'
const ManageSponsorshipPage = (props) => {
    return ( 
        <div className="homeTop" style={{marginTop: '100px'}}>
            <p>In Manage Sponsorship page</p>
            <Box sx={{ position: 'fixed', bottom: 100, right: 50 }} elevation={3}>
            <Fab to='/add-tournament' component={Link} color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Box>
        </div>
     );
}
 
export default ManageSponsorshipPage;