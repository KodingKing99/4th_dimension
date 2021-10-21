import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setRole } from '../redux/userSlice';
const PermissionsPractice = () => {
    const dispatch = useDispatch();
    const setManager = () => dispatch(setRole("manager"));
    const setOwner = () => dispatch(setRole("owner"));
    const setDrinkMiester = () =>  dispatch(setRole("drinkMiester"));
    const setPlayer = () =>  dispatch(setRole("player"));
    const role = () =>  useSelector((state) => state.user.role);
    console.log(role);
    return ( 
        <div id="permissionContainer" style={{marginTop: '100px'}}>
            <label>Set Your Role to view custom rendering</label>
            <button onClick={setManager}>Manager</button>
            <button onClick={setOwner}>Owner</button>
            <button onClick={setDrinkMiester}>Drink Miester</button> 
            <button onClick={setPlayer}>Player</button> 
        </div>
     );
}
 
export default PermissionsPractice;