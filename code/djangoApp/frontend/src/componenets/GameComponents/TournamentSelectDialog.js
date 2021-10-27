import React from "react";
import { Dialog } from "@mui/material";
import { DialogTitle } from "@mui/material";
// import './Home.css'
const TournamentSelectDialog = (props) => {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
      };
    
      const handleListItemClick = (value) => {
        onClose(value);
      };

    return ( 
        <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        
        <Button >Cancel</Button>
      </Dialog>
     );
}
 
export default TournamentSelectDialog;