import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setRole } from '../redux/userSlice';
const PermissionsPractice = () => {
    const dispatch = useDispatch();
    const setManager = () => dispatch(setRole("manager"));
    const setOwner = () => dispatch(setRole("owner"));
    const setDrinkMiester = () =>  dispatch(setRole("drinkMiester"));
    const setPlayer = () =>  dispatch(setRole("player"));
    const setSponsor = () =>  dispatch(setRole("sponsor"));
    const role = () =>  useSelector((state) => state.user.role);
    console.log(role);
    return ( 
        <div id="permissionContainer" style={{marginTop: '100px'}}>
            <label>Set Your Role to view custom rendering</label>
            <button style={{marginRight:'5px'}} onClick={setManager}>Manager</button>
            <button style={{marginRight:'5px'}} onClick={setOwner}>Owner</button>
            <button style={{marginRight:'5px'}} onClick={setDrinkMiester}>Drink Miester</button> 
            <button style={{marginRight:'5px'}} onClick={setPlayer}>Player</button> 
            <button style={{marginRight:'5px'}} onClick={setSponsor}>Sponsor</button> 

        </div>
     );
}
 
export default PermissionsPractice;