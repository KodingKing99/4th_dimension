import React from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
// import './Home.css'
const AddTournamentPage = (props) => {
    return ( 
        <div className="homeTop" style={{marginTop: '100px'}}>
            <p>Add Tournament page</p>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />

            <Checkbox defaultChecked />
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
      {/* <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        onChange={(newValue) => {
          setValue(newValue);
        }}
      /> */}
    {/* </LocalizationProvider> */}

                    </div>
     );
}
 
export default AddTournamentPage;