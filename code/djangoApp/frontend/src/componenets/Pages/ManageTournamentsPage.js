import React from "react";
import {Link} from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// import './Home.css'
const ManageTournamentsPage = (props) => {
    return ( 
        <div className="homeTop" style={{marginTop: '100px'}}>
            <p>In Manage Tournaments  View</p>
            <Fab to='/add-tournament' component={Link} color="primary" aria-label="add">
  <AddIcon />
</Fab>


                    </div>
     );
}
 
export default ManageTournamentsPage;