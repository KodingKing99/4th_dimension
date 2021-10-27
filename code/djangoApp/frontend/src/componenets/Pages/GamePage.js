  import React from "react";
  // import './Home.css'

  import Box from '@mui/material/Box';
  
  import Fab from '@mui/material/Fab';
  import AddIcon from '@mui/icons-material/Add';
  import TournamentSelectDialog from "../GameComponents/TournamentSelectDialog";

  import GameComponent from '../GameComponents/GameComponent'

  const selectedTournamentId='asdfasd'
  const selectedValue = ""


  let openDialog = false;



  const GamePage = (props) => {



    const handleClickOpen = () => {
      console.log("open dialogue func",openDialog)
      openDialog=true;
    };
    
    const handleClose = (value) => {
      openDialog=false;
      //setSelectedValue(value);
    };




      return ( 
          <div className="homeTop" style={{marginTop: '100px'}}>
            {selectedTournamentId!="" &&
            <GameComponent></GameComponent>
  }
  {selectedTournamentId=="" && 
              <Box sx={{ position: 'fixed', bottom: 100, right: 50 }} elevation={3}>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
      <AddIcon />
    </Fab>
    
        <TournamentSelectDialog
          selectedValue={selectedValue}
          open={openDialog}
          onClose={handleClose}
        />
    </Box>
  }
                      </div>
      );
  }
  
  export default GamePage;