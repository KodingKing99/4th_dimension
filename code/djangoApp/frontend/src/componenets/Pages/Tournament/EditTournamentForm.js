import { TabContext, TabPanel, TabList } from '@material-ui/lab';
import { Fade, Modal, Tabs, Tab, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Stack } from "@mui/material";
import { editTournament, deleteTourament } from '../../../services/services';
import "./EditTournamentForm.css";

const EditTournamentForm = (props) => {
    console.log("Hello")
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
    console.log(tourney)
    const [value, setValue] = useState("1");
    const handleChange = (e, value) => {
        setValue(value);
    }
    // let myTourney = tourney;
    // useEffect(() => {myTourney = tourney}, [tourney])
    const [date, setDate] = useState(tourney.tournamentdate);
    const [prize, setPrize] = useState(tourney.tournamentprize);
    const [holeCount, setHoleCount] = useState(tourney.tournamentholecount);
    const [sponsorId, setSponsorId] = useState(tourney.tournamentsponsor);
    useEffect(() => {
        setDate(tourney.tournamentdate);
        setPrize(tourney.tournamentprize);
        setHoleCount(tourney.tournamentholecount);
        setSponsorId(tourney.tournamentsponsor);
    }, [tourney]);
    const handleSubmit = () => {
        // date, sponsorId, prize, holeCount, id
        editTournament(date, sponsorId, prize, holeCount, tourney.tournamentid);
    }
    const handleDelete = () => {
        console.log("Deleting...")
        deleteTourament(tourney.tournamentid)
    }
    return ( 
        <>
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
                        <Tab label="Delete" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Stack sx={{
                            alignItems: 'center',marginBottom:'10px'}}>
                            <h1>Edit Tournament</h1>
                            <h2># Holes</h2>
                            <Box sx={cssMarginFlexTextAlign} hint="0">
                                <input className="formInput" type="number" value={holeCount} onChange={(e) => setHoleCount(e.target.value)} required/>
                            </Box>
                            <h2>Date</h2>
                            <Box sx={cssMarginFlexTextAlign}>
                                <input className="formInput" type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required></input>
                            </Box>
                            <h2>Prize</h2>
                            <Box sx={cssMarginFlexTextAlign}>
                                <input className="formInput" type="number" required value={prize} onChange={(e) => setPrize(e.target.value)}></input>
                            </Box>
                            <h2>Sponsor ID</h2>
                            <Box sx={cssMarginFlexTextAlign}>
                                <input className="formInput" type="number" required value={sponsorId} onChange={(e) => setSponsorId(e.target.value)}></input>
                            </Box>
                            <Button variant="outlined" onClick={() => handleSubmit()}>Submit</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel value="2">
                            <Button variant="outlined" onClick={() => handleDelete()}>Delete</Button>
                    </TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                
                </TabContext>
                </Box>
            
            </Modal> 
        </>
     );
}
 
export default EditTournamentForm;