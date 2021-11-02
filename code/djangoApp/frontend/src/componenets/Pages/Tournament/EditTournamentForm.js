import { TabContext, TabPanel, TabList } from '@material-ui/lab';
import { Fade, Modal, Tabs, Tab, Typography } from '@mui/material';

// import { Box } from '@mui/system';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';


const EditTournamentForm = (props) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const {tourney, handleClose, show} = props;
    const [value, setValue] = useState("1");
    const handleChange = (e, value) => {
        setValue(value);
    }
    // const [date, setDate] = useState(tourney.tournamentdate);
    // const [prize, setPrize] = useState(tourney.tournamentprize);
    // const [holeCount, setHoleCount] = useState(tourney.tournamentholecount);
    // const [sponsorId, setSponsorId] = useState(tourney.tournamentsponsor);
    console.log("Hello!")
    console.log(show);
    return ( 
        <>
        {/* <form>
                                <h2>Date</h2>
                                <input type="datetime-local"/>
                                <h2>Sponsor</h2>
                                <input type="number"/>
                                <h2>Prize</h2>
                                <input type="number"/>
                                <h2>Hole Count</h2>
                                <input type="number"/>
                            </form> */}
        {/* <div>Hello</div> */}
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={show}
            onClose={handleClose}
            closeAfterTransition
            >
                <Box sx={style}>
                <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                        Item One
                    </TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                
                </TabContext>
                </Box>
            
            </Modal> 
        </>
     );
}
 
export default EditTournamentForm;