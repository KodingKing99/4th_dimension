import React, {useEffect, useState} from "react";
import { Dialog, DialogTitle,DialogActions, DialogContent } from "@mui/material";
import { Button , Card ,CardContent,Typography  } from "@mui/material";
import { Box } from "@mui/system";
import { getAllActiveTournaments } from "../../services/services";
import { useSelector } from "react-redux";


// import './Home.css'
const TournamentSelectDialog = (props) => {
    const { onClose, open } = props;
    useEffect(() => {
      getAllActiveTournaments();
    }, []);
    const tournaments = useSelector((state) => state.data.tournaments);

    const getDateString = (string) => {
      let mystring = string.split("T");
      let date = mystring[0].split("-");
      let time = mystring[1].split("-")
      mystring = "" + date[1] + "/" + date[2] + "/" + date[0] + " at " + time[0];
      return mystring;
    }

      const handleListItemClick = (value) => {
        onClose(value);
      };

    return ( 
        <Dialog onClose={() =>{handleListItemClick("NONE")}} open={open}>
        <DialogTitle>Select Tournament To Start</DialogTitle>
        <DialogContent>
                      <div className="cardContainer">
              {tournaments && 
              tournaments.map((tournament, index) => {
                let myString = getDateString(tournament.tournamentdate)
                return(
                  <Box  key={tournament.tournamentid}>
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
                    <Button variant="outlined" onClick={() => handleListItemClick(tournament)} sx={{margin: "3px"}} >Select</Button>
                  </CardContent>
                </Card>
                </Box>
                )
              })}
              </div>
        </DialogContent>
        <DialogActions>
        <Button onClick={() =>{handleListItemClick("NONE")}}>Cancel</Button>
        </DialogActions>
      </Dialog>
     );
}
 
export default TournamentSelectDialog;