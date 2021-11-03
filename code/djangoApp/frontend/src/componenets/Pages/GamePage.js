  import React, {useCallback} from "react";
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

  import {Dialog, DialogTitle , DialogContent, DialogActions , DialogContentText, Button} from '@material-ui/core';

  import EditIcon from '@mui/icons-material/Edit';

  import {  Link ,useHistory } from "react-router-dom";


  const selectedTournamentId='asdfasd'
  const selectedValue = ""

  const actions = [
    { icon: <Icon path={mdiBeerOutline} title="Drink" size={1} />, name: 'All Drinks', },
    { icon: <Icon path={mdiBeerOutline} title="Drink" size={1} />, name: 'Root Beer', },

  ];

  let openDialog = false;



  const GamePage = (props) => {
     const history = useHistory();
    
    let [openQuickBuyDrinks, setOpenQuickBuyDrinks] = React.useState(false);

    const openQuickBuyDrinksHandler = () => {
      setOpenQuickBuyDrinks(openQuickBuyDrinks=true)
    }
    const purchaseQuickDrinkHandler = () => {
      setOpenQuickBuyDrinks(openQuickBuyDrinks=false)
    }

    const closeQuickBuyDrinksHandler = () => {
      setOpenQuickBuyDrinks(openQuickBuyDrinks=false)
    }

    const handleClickOpen = () => {
      console.log("open dialogue func",openDialog)
      openDialog=true;
    };
    
    const handleOpenDrinkFab = (button) => {
      console.log(button)
      if(button.name =='all drinks'){
        console.log("in here")
          //openDrinksPage();
           history.push('/drinks')
      }
      else{
        if(openQuickBuyDrinks!=true){
          openQuickBuyDrinksHandler();
        } 
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
            onClick={()=>{
              if(action.name =='All Drinks'){
                console.log("in here")
                   history.push('/drinks')
              }
              else{
                if(openQuickBuyDrinks!=true){
                  openQuickBuyDrinksHandler();
                } 
                    }
            }}
          />
        ))}
      </SpeedDial>
    {/* </Box> */}
  </Box>
  }



<Dialog
        open={openQuickBuyDrinks}
        onClose={closeQuickBuyDrinksHandler}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Confirm Purchase"}
        </DialogTitle>
        <DialogContent>
        <Icon path={mdiBeerOutline} title="Drink" size={1}/>
          <DialogContentText>
Are you sure you want to buy this drink?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeQuickBuyDrinksHandler}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Purchase
          </Button>
        </DialogActions>
      </Dialog>









                      </div>
      );
  }
  
  export default GamePage;