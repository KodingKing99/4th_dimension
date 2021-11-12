import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../services/services";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const ManageUsersPage = (props) => {
    useEffect(() => {
        getAllUsers();
    }, []);
    let userList = useSelector((state) => state.data.users)
    // console.log("In manage user")
    console.log(userList)
    let [user, setUser] = useState();
    let handleChange = (e) => {
        setUser(e.target.value);
    }
    return ( 
        <div className="homeTop" style={{marginTop: '100px'}}>
            <p>In Game View</p>
    <Box sx={{ minWidth: 120 }}>
      <h2>Select a User</h2>
      <FormControl fullWidth>
        <InputLabel id="select-label">User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={user}
          label="User"
          onChange={handleChange}
        >
            {userList && userList.map((user) => {
                return (<MenuItem value={user}>{user.userfirstname + ' ' + user.userlastname}</MenuItem>)
            })}
        </Select>
      </FormControl>
    </Box>
    </div>
     );
}
 
export default ManageUsersPage;