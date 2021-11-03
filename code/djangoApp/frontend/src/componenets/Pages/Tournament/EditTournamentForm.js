import { TabContext, TabPanel, TabList } from '@material-ui/lab';
import { Fade, Modal, Tabs, Tab, Typography } from '@mui/material';

// import { Box } from '@mui/system';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Stack } from "@mui/material";
// import { Box } from "@mui/system";
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import "./EditTournamentForm.css";

const EditTournamentForm = (props) => {
    const cssMarginFlexTextAlign = {
        margin:'5px',
        display:'flex',
        textAlign:'center'
      }
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
    const [date, setDate] = useState();
    const [prize, setPrize] = useState();
    const [holeCount, setHoleCount] = useState();
    const [sponsorId, setSponsorId] = useState();
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
                        <Tab label="Edit" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                    <Stack sx={{
                        alignItems: 'center',marginBottom:'10px'}}>
                        <h1>Edit Tournament</h1>
                        <h2># Holes</h2>
                        <Box sx={cssMarginFlexTextAlign} hint="0">
                            <input className="formInput" type="number" onChange={(e) => setHoleCount(e.target.value)} required/>
                        </Box>
                        <h2>Date</h2>
                        <Box sx={cssMarginFlexTextAlign}>
                            <input className="formInput" type="datetime-local" onChange={(e) => setDate(e.target.value)} required></input>
                        </Box>
                        <h2>Prize</h2>
                        <Box sx={cssMarginFlexTextAlign}>
                            <input className="formInput" type="number" required onChange={(e) => setPrize(e.target.value)}></input>
                        </Box>
                        <h2>Sponsor ID</h2>
                        <Box sx={cssMarginFlexTextAlign}>
                            <input className="formInput" type="number" required onChange={(e) => setSponsorId(e.target.value)}></input>
                        </Box>
                        <Button>Submit</Button>
                    </Stack>
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