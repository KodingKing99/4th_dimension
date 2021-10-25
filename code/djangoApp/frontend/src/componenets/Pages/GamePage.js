import React from "react";
// import './Home.css'

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Fab from '@mui/material/Fab';
import { Divider } from "@mui/material";

const steps = [
  {
    label: '',
    description: ``,
  },
  {
    label: '',
    description:
      '',
  },
  {
    label: '',
    description: ``,
  },
];


const GamePage = (props) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return ( 
        <div className="homeTop" style={{marginTop: '100px'}}>
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
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
      <h2>Par</h2>

      <h1>- 0 +</h1>
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
    <Box>
      Score Total: 
      </Box>

      <Divider variant="middle" />
      <Box>
        <h2>Leaderboard</h2>
        </Box>
        <Box sx={{ position: 'fixed', bottom: 100, right: 50 }} elevation={3}>
    <Fab color="primary" aria-label="add">
  {/* <AddIcon /> */}
</Fab>
</Box>
                    </div>
     );
}
 
export default GamePage;