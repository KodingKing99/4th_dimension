import React from "react";
import {Link} from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
// import './Home.css'
const ManageTournamentsPage = (props) => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return ( 
        <div className="homeTop" style={{marginTop: '100px'}}>
                {/* <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box> */}
            <p>In Manage Tournaments  View</p>
            <Box sx={{ position: 'fixed', bottom: 100, right: 50 }} elevation={3}>
            <Fab to='/add-tournament' component={Link} color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Box>

                    </div>
     );
}
 
export default ManageTournamentsPage;