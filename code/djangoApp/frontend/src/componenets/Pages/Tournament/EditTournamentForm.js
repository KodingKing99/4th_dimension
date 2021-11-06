import { TabContext, TabPanel, TabList } from '@material-ui/lab';
import { Fade, Modal, Tabs, Tab, Typography, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Stack } from "@mui/material";
import { editTournament, deleteTourament, activateTournament} from '../../../services/services';
import "./EditTournamentForm.css";
// import { Table } from '@material-ui/core';

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
    const [snackbarOpen, setSnackBarOpen] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState("Failed");
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
    const handleSetActive = () => {
        activateTournament(tourney).then((res) => {
            console.log(res)
            res.status === 200 ? setSnackbarMsg("Succesfully activated tournament") : setSnackbarMsg("Failed to activate tournament");
            setSnackBarOpen(true);
        });
        
    }
    return ( 
        <>
             <Snackbar 
                open={snackbarOpen}
                onClose={() => {setSnackBarOpen(false)}}
                message={snackbarMsg}
                autoHideDuration={3000}
            />
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
                        <Tab label="Set Active" value="3"/>
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Stack sx={{
                            alignItems: 'center',marginBottom:'10px'}}>
                            <h1>Edit Tournament</h1>
                            <Box sx={cssMarginFlexTextAlign} hint="0">
                                <h2># Holes</h2>
                                <input className="formInput" type="number" value={holeCount} onChange={(e) => setHoleCount(e.target.value)} required/>
                            </Box>
                            <Box sx={cssMarginFlexTextAlign}>
                                <h2>Date</h2>
                                <input className="formInput" type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required></input>
                            </Box>
                            <Box sx={cssMarginFlexTextAlign}>
                                <h2>Prize</h2>
                                <input className="formInput" type="number" required value={prize} onChange={(e) => setPrize(e.target.value)}></input>
                            </Box>
                            <Box sx={cssMarginFlexTextAlign}>
                                <h2>Sponsor ID</h2>
                                <input className="formInput" type="number" required value={sponsorId} onChange={(e) => setSponsorId(e.target.value)}></input>
                            </Box>
                            <Button variant="outlined" onClick={() => handleSubmit()}>Submit</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel value="2">
                            <Button variant="outlined" onClick={() => handleDelete()} className="deleteButt">Delete</Button>
                    </TabPanel>
                    <TabPanel value="3">
                        <Button variant="outlined" onClick={() => handleSetActive()}>Set Active</Button>
                    </TabPanel>
                </TabContext>
                </Box>
            
            </Modal> 
        </>
     );
}
 
export default EditTournamentForm;