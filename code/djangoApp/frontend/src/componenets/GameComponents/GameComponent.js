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
  import Icon from "@mdi/react";
  import { mdiBeerOutline } from '@mdi/js';





const GameComponent = (props) => {

  const steps1 = [
    {
      label: 'Hole 1',
      score: 0,
    },
    {
      label: 'Hole 2',
      score: 0,
    },
    {
      label: 'Hole 3',
      score: 0,
    },
  ];


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
    const maxSteps = steps.length;
  
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

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
          <Typography sx={{   width: '100%', textAlign:'center', fontSize:'120px', }}>{steps[activeStep].label}</Typography>        
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
              onClick={handleNext}
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
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
      {activeStep===(maxSteps-1) &&
      <Box sx={{ alignItems: 'center', margin:1,textAlign:'center'}}>
        <Button variant="outlined">Finish Game</Button>
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
  </div>
     );
}
 
export default GameComponent;