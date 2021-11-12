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

  import useMediaQuery from '@mui/material/useMediaQuery';

  import {  Link ,useHistory } from "react-router-dom";



const GameComponent = (props) => {
  const {selectedTournament} = props;
  const history = useHistory();

  let tempArray = [];
  let tempActiveStep = 0;
  let tempScoreTotal = 0;
    if(JSON.parse(localStorage.getItem('currentGameScore'))){
      tempArray = JSON.parse(localStorage.getItem('currentGameScore'))
      for(let i=0;i<tempArray.length;i++){
        tempScoreTotal = tempScoreTotal + tempArray[i];
      }
      if(localStorage.getItem('activeStep')){tempActiveStep = parseInt(localStorage.getItem('activeStep'))}
    } else {
      for(let i=0;i<selectedTournament.tournamentholecount;i++){
        tempArray.push(0);
      }
    }


  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  selectedTournament.tournamentholecount

    let [scoreTotal,setScoreTotal] = useState(tempScoreTotal);
    let [steps,setScore] = useState(tempArray);

    const [activeStep, setActiveStep] = React.useState(tempActiveStep);
    const [confirmNextHole, setConfirmNextHole] = React.useState(false);
    const [confirmLeaveGame, setConfirmLeaveGame] = React.useState(false);
    const [confirmFinishGame, setConfirmFinishGame] = React.useState(false);
    const [gameFinished, setGameFinished] = React.useState(false);




    const maxSteps = steps.length;

    const onOpenFinishGameDialog = () => {
      setConfirmFinishGame(true);
    }
    const onCloseFinishGameDialog = () => {
      setConfirmFinishGame(false);
      setGameFinished(true);
    }
    const handleFinishGame = () => {
      setConfirmFinishGame(false);
      setGameFinished(true);
    }
    const onOpenConfirmLeaveGame = () => {
      setConfirmLeaveGame(true);
    }

    const onCloseResults = () =>{
      localStorage.removeItem('currentGameScore')
      localStorage.removeItem('activeStep')
      localStorage.removeItem('selectedTournament')
      localStorage.removeItem('selectedTournamentId')
      // history.push('/leaderboard')
      history.push('/')

      setGameFinished(false);
    }

    const onCloseConfirmLeaveGame = () => {
      localStorage.remove('currentGameScore')
      localStorage.remove('activeStep')
      localStorage.remove('selectedTournament')
      localStorage.remove('selectedTournamentId')
      resetSelectedTournament();
    }

    const handleLeaveGame = () => {
      setConfirmLeaveGame(false);
      setGameFinished(true);
    }
  
    let onOpenConfirmNextHole = () => {
        setConfirmNextHole(true);
    }
    
    const onCancelGoNextHole = () => {
      setConfirmNextHole(false);
    }

    const incrementActiveStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        localStorage.setItem('activeStep',activeStep+1)
        setConfirmNextHole(false);
    };

  
    // const handleBack = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    const handleIncrementScore = (index) =>{
      steps[index] = steps[index] + 1
      setScore([...steps]);
      setScoreTotal(scoreTotal + 1);
      localStorage.setItem('currentGameScore', JSON.stringify(steps));
    }
    const handleDecrimentScore = (index) =>{
      steps[index] = steps[index] - 1;
      setScore([...steps]);
      setScoreTotal(scoreTotal - 1);
      localStorage.setItem('currentGameScore', JSON.stringify(steps));
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
          <Typography sx={{   width: '100%', textAlign:'center', fontSize:'120px', }}><strong>Hole # {activeStep+1}</strong></Typography>    
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





<Dialog 
      open={gameFinished}
      fullScreen={fullScreen}
      >
        <DialogTitle id="alert-dialog-title">
          Results
          </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box >
    <Typography sx={{textAlign:'center'}} variant="h2">
Results</Typography>
  </Box>
  <Divider />
  <Box sx={{margin:1}}>

  <Typography sx={{textAlign:'center'}} variant="h4">
  <strong>Score Total: {scoreTotal}</strong>
  </Typography>
  </Box>
  <Divider />

  { steps.map((hole, index) => (
                
  <Box>
<Typography sx={{textAlign:'center'}} >
  <strong>Hole {index+1} : {hole}</strong>
</Typography>
  </Box>
              ))}



            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseResults} autoFocus>Close</Button>
          </DialogActions>
</Dialog>
    </div>

  </div>
     );
}
 
export default GameComponent;