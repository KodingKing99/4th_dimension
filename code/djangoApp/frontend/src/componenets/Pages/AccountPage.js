import React, { useState } from "react";
import { useSelector} from "react-redux";
import { Button, Stack, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { depositMoney, changeName } from '../../services/services';
 // import './Home.css'

const cssMarginFlexTextAlign = {
    margin: '5px',
    display: 'flex',
    textAlign: 'center'
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AccountPage = (props) => {
    const user = useSelector((state) => state.user);
    const account = useSelector((state) => state.user.account);
    return ( 
        <div className="account-page" style={{marginTop: '100px', textAlign: 'center'}}>
            <h1> Account Details </h1>
            <h2> Name: {user.firstName} {user.lastName}</h2>
            <h2> Email: {user.email} </h2>
            <h2> Account Balance: ${account}</h2>

            <DepositModal />
            <NameModal />
            
        </div>
     );
}

function DepositModal() {
    const user = useSelector((state) => state.user);
    const [open, setOpen] = React.useState(false);
    const [amount, setAmount] = useState(0);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        depositMoney(user.id, amount);
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" sx={{ margin: "3px" }} onClick={() => {
                handleOpen();
            }}>Deposit Money</Button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Box sx={style}>
                    <Stack sx={{
                        alignItems: 'center', marginBottom: '10px'
                    }}>
                        <h2>Amount to Deposit</h2>
                        <Box sx={cssMarginFlexTextAlign}>
                            <input className="formInput" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required></input>
                        </Box>
                        <Button variant="outlined" onClick={() => { handleSubmit(); }}>Submit</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}

function NameModal() {
    const user = useSelector((state) => state.user);
    const [open, setOpen] = React.useState(false);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        changeName(user.id, firstName, lastName);
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" sx={{ margin: "3px" }} onClick={() => {
                handleOpen();
            }}>Change Name</Button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Box sx={style}>
                    <Stack sx={{
                        alignItems: 'center', marginBottom: '10px'
                    }}>
                        <h2>New First Name</h2>
                        <Box sx={cssMarginFlexTextAlign}>
                            <input className="formInput" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>
                        </Box>
                        <h2>New Last Name</h2>
                        <Box sx={cssMarginFlexTextAlign}>
                            <input className="formInput" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>
                        </Box>
                        <Button variant="outlined" onClick={() => { handleSubmit(); }}>Submit</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
 
export default AccountPage;