  import React, { useEffect , useCallback , useState} from "react";
  // import './Home.css'
  import { useSelector, useDispatch } from "react-redux";

  import Box from '@mui/material/Box';
  
  import {Divider, Fab , Typography } from '@mui/material';
  import AddIcon from '@mui/icons-material/Add';
  import TournamentSelectDialog from "../GameComponents/TournamentSelectDialog";
  import Icon from "@mdi/react";
  import { mdiBeerOutline } from '@mdi/js';
  import { coffee } from '@mui/icons-material';
  import SpeedDial from '@mui/material/SpeedDial';
  import SpeedDialAction from '@mui/material/SpeedDialAction';

  import SpeedDialIcon from '@mui/material/SpeedDialIcon';
  import GameComponent from '../GameComponents/GameComponent'

  import {Dialog, DialogTitle , DialogContent, DialogActions , DialogContentText, Button} from '@material-ui/core';

  import EditIcon from '@mui/icons-material/Edit';

  import {  Link ,useHistory } from "react-router-dom";

  import {useStyles} from '../../styleUtils/styleUtils';
  import { transferMoney, getUserById , getAllMenuItems , createNewTransaction , addTournamentParticipant} from "../../services/services";

  import './GamePage.css';




  const GamePage = (props) => {
     const history = useHistory();
     const [openDialog, setOpenDialog] = React.useState(false);
     const [selectedTournamentId, setSelectedTournamentId] = React.useState("NONE");
     const [gameFinsihed, setGameFinsihed] = React.useState(false);
     const [selectedTournament, setSelectTournament] = React.useState(undefined);
     const classes = useStyles();
     const [menu, setMenu] = useState([]);

     const user = useSelector((state) => state.user);




     let tempActions = [
      { icon: <Icon path={mdiBeerOutline} title="Drink" size={1} />, name: 'All Drinks', },
      { icon: <Icon path={mdiBeerOutline} title="Drink" size={1} />, name: 'Root Beer', },
  
    ];

    const [actions,setActions] = React.useState(tempActions);

    console.log("menu",menu)

    const loadActionsIntoSpeedDial = (menu) => {
      console.log("menu test",menu)
      if(localStorage.getItem("recentDrinkPurchases")!=null  && localStorage.getItem("recentDrinkPurchases")!=undefined){
        if(JSON.parse(localStorage.getItem("recentDrinkPurchases"))!=[])
        {
        const recentDrinkPurchases = JSON.parse(localStorage.getItem("recentDrinkPurchases"));

        for(let i = 0; i < recentDrinkPurchases.length; i++){
          console.log("menulength",menu.length)
          for(let j = 0; j < menu.length; j++){
            console.log(menu[j].itemid == recentDrinkPurchases[i])
            if(menu[j].itemid == recentDrinkPurchases[i]){
              console.log("in here in the for loop")
              actions.push({ icon: <Icon>{menu[j].itemimage}</Icon>, name: menu[j].itemname, });
              setActions([...actions]);
            }
          }
        }
      }
      }
    }


    useEffect(() => {
      getAllMenuItems().then(res => {
          setMenu(res);
          loadActionsIntoSpeedDial(res)
      })
  }, [])


     if(localStorage.getItem('selectedTournamentId') && localStorage.getItem('selectedTournamentId') !== selectedTournamentId){
       setSelectedTournamentId(localStorage.getItem('selectedTournamentId'));
       setSelectTournament(JSON.parse(localStorage.getItem('selectedTournament')));
     }




    let [openQuickBuyDrinks, setOpenQuickBuyDrinks] = React.useState(false);

    const openQuickBuyDrinksHandler = () => {
      setOpenQuickBuyDrinks(openQuickBuyDrinks=true)


    }
    const purchaseQuickDrinkHandler = () => {
      transferMoney(user.id, 8, 0).then((isSuccess) => {
        if (!isSuccess) {
            //setPaymentError(true);
            //setQuantity(0);
            return
        }
        createNewTransaction(user.id, 4, price * quantity);
        getUserById(user.id).then((user) => {
            //dispatch(setUser(user));
        });

    });
      setOpenQuickBuyDrinks(openQuickBuyDrinks=false)
    }

    const closeQuickBuyDrinksHandler = () => {
      setOpenQuickBuyDrinks(openQuickBuyDrinks=false)
    }

    const handleClickOpen = () => {
      console.log("open dialogue func",openDialog)
      setOpenDialog(true);
    };

    const resetSelectedTournament = () => {
      setSelectedTournamentId(selectedTournament = "NONE");
    }
    
    const handleOpenDrinkFab = (button) => {
      console.log(button)
      if(button.name =='all drinks'){
          //openDrinksPage();
           history.push('/drinks')
      }
      else{
        if(openQuickBuyDrinks!=true){
          openQuickBuyDrinksHandler();
        } 
            }
    }

    const tournamentSelectHandleClose = (tournament) => {
      if(tournament=="NONE" || tournament==undefined){
        setSelectedTournamentId("NONE")
        //setSelectTournament(tournament)
        setOpenDialog(false);
      } else{
        setSelectedTournamentId(tournament.tournamentid);
        setSelectTournament(tournament);
        addTournamentParticipant(tournament.tournamentid, user.id,0);
        localStorage.setItem('selectedTournamentId', tournament.tournamentid);
        localStorage.setItem('selectedTournament', JSON.stringify(tournament));
        setOpenDialog(false);
      }

      //setSelectedValue(value);
    };




      return ( 
          <div className="homeTop" style={{marginTop: '100px'}}>
            {selectedTournamentId!="NONE" &&
            <GameComponent selectedTournament = {selectedTournament} resetSelectedTournament = {resetSelectedTournament}></GameComponent>
  }
  {(selectedTournamentId=="NONE" || selectedTournamentId==undefined) && 
  <div>
    <Box sx={{margin:'10px',
  display:'flex',
  width:'100%',
  textAlign:'center'}}>
    <Typography sx={{textAlign:'center'}} variant="h2">
Looks like you don't have an active Tournament to Play</Typography>
  </Box>
  <Divider />

  <Box sx={{margin:'30px',
    width:'100%',
  textAlign:'center'}}>
    <Typography sx={{textAlign:'center'}} variant="h4">
Hit the + button to start a tournament</Typography>
  </Box>
              <Box sx={{ position: 'fixed', bottom: 100, right: 50 }} elevation={3}>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen} className={classes.fab}>
      <AddIcon />
    </Fab>
    
        <TournamentSelectDialog
          onClose={tournamentSelectHandleClose}
          open={openDialog}
        />
    </Box>
    </div>
  }
  {selectedTournamentId!="NONE" &&
 <Box sx={{ position: 'fixed', bottom: 100, right: 50 }} elevation={3}>



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
          <Button onClick={purchaseQuickDrinkHandler} autoFocus>
            Purchase
          </Button>
        </DialogActions>
      </Dialog>









                      </div>
      );
  }
  
  export default GamePage;