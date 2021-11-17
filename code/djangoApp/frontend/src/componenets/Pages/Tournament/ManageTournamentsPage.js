import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { getAllTournaments } from "../../../services/services";
import { useSelector } from "react-redux";
import { Button, Card, CardContent, Typography } from "@mui/material";
import {useStyles} from '../../../styleUtils/styleUtils';
import "./ManageTournamentsPage.css"
import EditTournamentForm from "./EditTournamentForm";
// import './Home.css'
const ManageTournamentsPage = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  useEffect(() => {
    getAllTournaments();
  }, []);
  const tournaments = useSelector((state) => state.data.tournaments);
  // console.log(tournaments);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => {setModalShow(false)}
  const handleOpen = () => {setModalShow(true)}
  const [tourney, setTourney] = useState();
  const getDateString = (string) => {
    let mystring = string.split("T");
    let date = mystring[0].split("-");
    let time = mystring[1].split("-")
    console.log(string)
    mystring = "" + date[1] + "/" + date[2] + "/" + date[0] + " at " + time[0];
    console.log(mystring)
    return mystring

  const openForms = (tournament) => {
    console.log(tournament);
    // setTourney(tournament);
    // handleOpen();
  }
 
  }
    return ( 
        <div className="homeTop" style={{marginTop: '100px'}}>
            <p>In Manage Tournaments  View</p>
            <div className="cardContainer">
              {tournaments && 
              tournaments.map((tournament, index) => {
                let myString = getDateString(tournament.tournamentdate)
                return(
                <div className="responsive" key={tournament.tournamentid}>
                <Card key={tournament.tournamentid} className="tourneyCard">
                  <CardContent>
                    <Typography variant="h5">
                      {`Date: ${myString}`}
                    </Typography>
                    <Typography variant="h5">
                      {`Sponsor: ${tournament.tournamentsponsor}`}
                    </Typography>
                    <Typography variant="h5">
                      {`Prize: $${tournament.tournamentprize}`}
                    </Typography>
                    <Typography variant="h5">
                      {`${tournament.tournamentholecount} holes`}
                    </Typography>
                     <Typography variant="h5">
                      {`Active: ${tournament.tournamentactiveflag}`}
                    </Typography>
                    <Button variant="outlined" sx={{margin: "3px"}} onClick={() => {
                                                              console.log(tournament);
                                                              setTourney(tournament);
                                                              handleOpen();
                    }}>Manage</Button>
                  </CardContent>
                </Card>
                </div>
                );
              })
              }
            </div>
            <Box sx={{ position: 'fixed', bottom: 100, right: 50 }} elevation={3}>
            
            <Fab to='/add-tournament' component={Link} color="primary" aria-label="add" className={classes.fab}>
  <AddIcon />
</Fab>
</Box>
              {tourney && 
                <EditTournamentForm tourney={tourney} handleClose={handleClose} show={modalShow}/>
              
              }
                {/* <EditTournamentForm tourney={tourney} handleClose={handleClose} show={modalShow}/> */}

                    </div>
     );
}
 
export default ManageTournamentsPage;