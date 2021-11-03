  import React from "react";
  // import './Home.css'

  import Box from '@mui/material/Box';
  
  import Fab from '@mui/material/Fab';
  import AddIcon from '@mui/icons-material/Add';
  import TournamentSelectDialog from "../GameComponents/TournamentSelectDialog";
  import Icon from "@mdi/react";
  import { mdiBeerOutline } from '@mdi/js';
  import SpeedDial from '@mui/material/SpeedDial';
  import SpeedDialAction from '@mui/material/SpeedDialAction';

  import SpeedDialIcon from '@mui/material/SpeedDialIcon';
  import GameComponent from '../GameComponents/GameComponent'

  import EditIcon from '@mui/icons-material/Edit';

  import {  Link } from "react-router-dom";


  const selectedTournamentId='asdfasd'
  const selectedValue = ""

  const actions = [
    { icon: <Icon path={mdiBeerOutline} title="Drink" size={1} />, name: 'All Drinks', },
    { icon: <Icon path={mdiBeerOutline} title="Drink" size={1} />, name: 'Root Beer', },

  ];

  let openDialog = false;



  const GamePage = (props) => {
    // const history = useHistory();


    const handleClickOpen = () => {
      console.log("open dialogue func",openDialog)
      openDialog=true;
    };
    
    const handleOpenDrinkFab = (button) => {
      switch(button){
        case 'All Drinks':

          // history.push('/drinks')
      }
    }

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
  {selectedTournamentId!="" &&
 <Box sx={{ position: 'fixed', bottom: 100, right: 50 }} elevation={3}>
      {/* <Fab color="primary" aria-label="add">
      <Icon path={mdiBeerOutline} title="Drink" size={1} />
  </Fab> */}



  {/* <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}> */}
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        // icon={<Icon path={mdiBeerOutline} title="Drink" size={1} openIcon={<EditIcon />}/>}
        icon={<SpeedDialIcon icon={<Icon path={mdiBeerOutline} title="Drink" size={1}/>} />}

      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            tooltipTitle={action.name}
            onClick={handleOpenDrinkFab(action.name)}
          />
        ))}
      </SpeedDial>
    {/* </Box> */}
  </Box>
  }

                      </div>
      );
  }
  
  export default GamePage;