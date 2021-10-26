import React from "react";
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

  import Fab from '@mui/material/Fab';
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
const ManageSponsorshipPage = (props) => {



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
  
        </Paper>
        <Box sx={{   width: '100%', textAlign:'center', fontSize:'120px', }}>
        <span style={{fontSize:'40px'}}>Par</span><br></br><span> - </span> 0 <span> + </span>
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
      <Icon path={mdiBeerOutline} title="Drink" size={1} />
  </Fab>
  </Box>
  </div>
     );
}
 
export default ManageSponsorshipPage;