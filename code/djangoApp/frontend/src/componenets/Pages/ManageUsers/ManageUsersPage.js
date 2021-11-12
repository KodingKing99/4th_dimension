import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { deleteUserById, getAllUsers } from "../../../services/services";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@material-ui/core";
import "./ManageUsers.css"
const ManageUsersPage = (props) => {
    useEffect(() => {
        getAllUsers();
    }, [userList]);
    let userList = useSelector((state) => state.data.users)
    // console.log("In manage user")
    console.log(userList)
    let [user, setUser] = useState();
    let [userRole, setUserRole] = useState();
    let handleChange = (e) => {
        setUser(e.target.value);
        // Set the role when a user is selected
        setUserRole(e.target.value.userrole);
    }
    let handleChangeUserRole = (e) => {
        setUserRole(e.target.value);
    }
    let handleDelete = () => {
        deleteUserById(user.userid)
        setUser();
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
                return (<MenuItem value={user} key={user.userfirstname + ' ' + user.userlastname}>{user.userfirstname + ' ' + user.userlastname}</MenuItem>)
            })}
        </Select>
      </FormControl>
    </Box>
    {user && 
        <Box sx={{ minWidth: 120}} className="formbox">
            <FormControl>
                <div className="itembox">
                    <h2>{user.userfirstname + ' ' + user.userlastname}</h2>
                    <label>User Role</label>
                    <Select
                        labelId="demo-simple-select-label"
                        id="roleSelect"
                        value={userRole}
                        label="User role"
                        onChange={handleChangeUserRole}
                    >
                        <MenuItem value={1}>Player</MenuItem>
                        <MenuItem value={2}>Drink Meister</MenuItem>
                        <MenuItem value={3}>Manager</MenuItem>
                        <MenuItem value={4}>Sponsor</MenuItem>
                        <MenuItem value={5}>Owner</MenuItem>
                    </Select>
                    {/* <input value={user.userrole} type="number"/> */}
                    <Button variant="outlined">Edit User Role</Button>
                    <Button variant="outlined" onClick={handleDelete}>Delete User</Button>
                    </div>
                {/* <input value={user.userfirstname}/>
                <input value={user.userlastname}/>
                <input value={user.useremail}/> */}
                
            </FormControl>
        </Box>
    }
    </div>
     );
}
 
export default ManageUsersPage;