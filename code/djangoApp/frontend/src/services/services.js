import useFetch from "react-fetch-hook"
import {store} from '../redux/store'
// import { useDispatch } from "react-redux";
import { setTournaments } from "../redux/dataSlice";
import axios from "axios";
const applicationName = 'http://127.0.0.1:8000/api/'
let requestOptions = {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
}
export const getAllTournaments = () => {
    console.log("fetching tournaments...")
    axios.get(applicationName + 'tournament/').then((response) => {
        console.log("Fetched tourneys")
        console.log(response);
        store.dispatch(setTournaments(response.data));
    }).catch(err => console.log(err));
}
export const createTournament = (date, sponsorId, prize, holeCount) => {  
    requestOptions = {
        ...requestOptions,
        body: JSON.stringify({ 
            tournamentdate: date,
            tournamnetsponsor: sponsorId,
            tournamentprize: prize,
            tournamentholecount: holeCount
        })
    };
    // const {data, isLoading, error} = useFetch(applicationName + 'tournament/', {...requestOptions});
    // return {data, isLoading, error};
    let data = {
        tournamentdate: date,
        tournamnetsponsor: sponsorId,
        tournamentprize: prize,
        tournamentholecount: holeCount
    }
    axios.post(applicationName + 'tournament/', data).then((response) => {
        console.log(response);
    })
}


export const login = async (email, password) => {
    try {
        let response = await axios.get(applicationName + "login/", {
            params: {
                email: email,
                password: password
        }});
        if(response.data.length === 0) {
            return {error: "Invalid credentials"}
        }
        // Translate the response into a user object
        let resData = response.data[0];
        let role = "player" // Default role
        switch (resData.userrole) {
            case 1:
                role = "player"
                break;
            case 2:
                role = "miester"
                break;
            case 3:
                role = "manager"
                break;
            case 4:
                role = "sponsor"
                break;
            case 5:
                role = "owner"
        }
        const data = {
            firstName: resData.userfirstname,
            lastName: resData.userlastname,
            fullName: resData.userfirstname + " " + resData.userlastname,
            id: resData.userid,
            email: resData.useremail,
            role: role,
            // permissions: response.data.permissions
        }
        return data;
    } catch (error) {
        return {error: error};
    }   
}

export const signup = async (email, firstName, lastName, password, role = 1) => {
    try {
        const response = await axios.post(applicationName + "signup/", {
            useremail: email,
            userfirstname: firstName,
            userlastname: lastName,
            userpassword: password,
            // useraccount: null,
            userrole: role,
        }).catch(err => {
            return {error: err};
        });
        if(response.error) {
            return {error: response.error.response.data};
        }
        return {success: "Successfully signed up"};
    } catch (error) {
        return {error: error};
    }
}
    