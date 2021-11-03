import React, { useState } from "react";
// import './Home.css'
import { useTheme } from '@mui/material/styles';
  import MobileStepper from '@mui/material/MobileStepper';
  import Paper from '@mui/material/Paper';
  import Typography from '@mui/material/Typography';
  import Button from '@mui/material/Button';
  import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
  import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
  import { Divider } from "@mui/material";
  import Box from '@mui/material/Box';
  import { Dialog } from "@mui/material";
  import { DialogTitle , DialogContent, DialogActions , DialogContentText } from "@mui/material";
  import Icon from "@mdi/react";
  import { mdiBeerOutline } from '@mdi/js';





const GameComponent = (props) => {




    let [scoreTotal,setScoreTotal] = useState(0);
    let [steps,setScore] = useState([0,0,0,0,0]);


    // const handleIncrementScore = ()=>{
    //     console.log("increment")
    //     console.log(currentScore)
    //     currentScore=currentScore +1;
    //   }
    
    //   const handleDecrimentScore = () =>{
    //     console.log("decrement")
    //     console.log(currentScore)
    //     currentScore= currentScore + 1;
    //   }


    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    let [confirmNextHole, setConfirmNextHole] = React.useState(false);
    let [confirmLeaveGame, setConfirmLeaveGame] = React.useState(false);
    let [confirmFinishGame, setConfirmFinishGame] = React.useState(false);

    const maxSteps = steps.length;

    const onOpenFinishGameDialog = () => {
      setConfirmFinishGame(confirmFinishGame =true);
    }
    const onCloseFinishGameDialog = () => {
      setConfirmFinishGame(confirmFinishGame =false);
    }
    const handleFinishGame = () => {
      setConfirmFinishGame(confirmFinishGame =false);
    }
    const onOpenConfirmLeaveGame = () => {
      setConfirmLeaveGame(confirmLeaveGame = true);
    }

    const onCloseConfirmLeaveGame = () => {
      setConfirmLeaveGame(confirmLeaveGame = false);
    }

    const handleLeaveGame = () => {
      setConfirmLeaveGame(confirmLeaveGame = false);
    }
  
    let onOpenConfirmNextHole = () => {
        setConfirmNextHole(confirmNextHole =true);
    }
    
    const onCancelGoNextHole = () => {
      setConfirmNextHole(confirmNextHole =false);
    }

    const incrementActiveStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setConfirmNextHole(confirmNextHole =false);
    };

  
    // const handleBack = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    const handleIncrementScore = (index) =>{
      steps[index] = steps[index] + 1
      setScore([...steps]);
      setScoreTotal(scoreTotal + 1);
    }
    const handleDecrimentScore = (index) =>{
      steps[index] = steps[index] - 1;
      setScore([...steps]);
      setScoreTotal(scoreTotal - 1);
    }

    return ( 
        <div>
        <Box sx={{ flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography sx={{   width: '100%', textAlign:'center', fontSize:'120px', }}><strong>Hole # {activeStep}</strong></Typography>    
          <Button variant="outlined" sx={{width:'10%'}} onClick={onOpenConfirmLeaveGame}>End Game</Button>    
        </Paper>
        <Box sx={{   width: '100%', textAlign:'center', fontSize:'120px',cursor: 'grab' }}>
        <span style={{fontSize:'40px',cursor: 'grab'}}>Par</span><br></br><span onClick={()=>{if(steps[activeStep]>0){handleDecrimentScore(activeStep)}}}> - </span> {steps[activeStep]} <span onClick={()=>{handleIncrementScore(activeStep)}} > + </span>
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
           
            <Button
              size="small"
              onClick={onOpenConfirmNextHole}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          // backButton={
          //   <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          //     {theme.direction === 'rtl' ? (
          //       <KeyboardArrowRight />
          //     ) : (
          //       <KeyboardArrowLeft />
          //     )}
          //     Back
          //   </Button>
          // }
        />
      </Box>
      {activeStep===(maxSteps-1) &&
      <Box sx={{ alignItems: 'center', margin:1,textAlign:'center'}}>
        <Button variant="outlined" onClick={onOpenFinishGameDialog}>Finish Game</Button>
        </Box>
        }
      <Divider />
      <Box sx={{margin:1}}>
        <h2>Score Total: {scoreTotal}</h2>
        </Box>
        <Divider sx={{margin:1}} variant="middle" />
        <Box>
          <h2>Leaderboard</h2>
          </Box>






          <div>
      <Dialog
        open={confirmNextHole}
        onClose={onCancelGoNextHole}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Go to next hole"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you sure you want to go to the next hole?
           You will not be able to go back to the previous hole if you do.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancelGoNextHole}>Cancel</Button>
          <Button onClick={incrementActiveStep} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>


      <Dialog 
      open={confirmLeaveGame}
      onClose={onCloseConfirmLeaveGame}
      >
        <DialogTitle id="alert-dialog-title">
          Leave Game
          </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
Are you sure you want to leave the game?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseConfirmLeaveGame}>Cancel</Button>
          <Button onClick={handleLeaveGame} autoFocus>Yes</Button>
          </DialogActions>
</Dialog>
<Dialog 
      open={confirmFinishGame}
      onClose={onCloseFinishGameDialog}
      >
        <DialogTitle id="alert-dialog-title">
          Finish Game
          </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
Are you sure you want to Finish the game?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseFinishGameDialog}>Cancel</Button>
          <Button onClick={handleFinishGame} autoFocus>Yes</Button>
          </DialogActions>
</Dialog>
    </div>





  </div>
     );
}
 
export default GameComponent;