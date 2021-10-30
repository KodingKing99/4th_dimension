import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { getAllTournaments } from "../../services/services";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography } from "@mui/material";
import "./ManageTournamentsPage.css"
// import './Home.css'
const ManageTournamentsPage = (props) => {
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    getAllTournaments();
  }, []);
  const tournaments = useSelector((state) => state.data.tournaments);
  console.log(tournaments);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getDateString = (string) => {
    let mystring = string.split("T");
    let date = mystring[0].split("-");
    let time = mystring[1].split("-")
    mystring = "" + date[1] + "/" + date[2] + "/" + date[0] + " at " + time[0];
    return mystring;
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
                      {`Sponsor: ${tournament.tournamnetsponsor}`}
                    </Typography>
                    <Typography variant="h5">
                      {`Prize: $${tournament.tournamentprize}`}
                    </Typography>
                    <Typography variant="h5">
                      {`${tournament.tournamentholecount} holes`}
                    </Typography>
                  </CardContent>
                </Card>
                </div>
                );
              })
              }
            </div>
            <Box sx={{ position: 'fixed', bottom: 100, right: 50 }} elevation={3}>
            
            <Fab to='/add-tournament' component={Link} color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Box>

                    </div>
     );
}
 
export default ManageTournamentsPage;