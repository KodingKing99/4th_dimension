import useFetch from "react-fetch-hook"
import store from '../redux/store'
// import { useDispatch } from "react-redux";
import { setTournaments } from "../redux/dataSlice";
import axios from "axios";
const applicationName = 'http://127.0.0.1:8000/api/'
let requestOptions = {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
}
// const dispatch = useDispatch();
export const getAllTournaments = () => {
    // console.log("Getting all tournaments...")
    // const {data, isLoading, error} = useFetch(applicationName + 'tournament/');
    // return {data, isLoading, error}
    axios.get(applicationName + 'tournament/').then((response) => {
        console.log("Fetched tourneys")
        console.log(response);
        console.log(store)
        return response
        // store.dispatch({type: setTournaments, payload: {response}})
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
    const {data, isLoading, error} = useFetch(applicationName + 'tournament/', {...requestOptions});
    return {data, isLoading, error};
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


export const login = (email, password) => {
    // const {data, isLoading, error} = useFetch(applicationName + "login/?email="+email.replace('@','%40')+"&password="+password)
    // console.log(data,"here")
    // return {data, isLoading, error}
    // return {data: {}, isLoading: false, error: null}
     fetch("/api/login/?email="+email.replace('@','%40')+"&password="+password)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}

export const signup = (email, firstName, lastName, password, role = 1) => {
    fetch("api/signup/",
    {
        method: 'POST',
        body: {
            "useremail": email,
            "userfirstname": firstName,
            "userlastname": lastName,
            "userpassword": password,
            "userrole": role,
        },
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            console.log(response)
        })
        .then(data => {
            console.log(data)
        })
    // requestOptions = {
    //     ...requestOptions,
    //     body: JSON.stringify({
    //         useremail: email,
    //         userfirstname: firstName,
    //         userlastname: lastName,
    //         userpassword: password,
    //         userrole: role,
    //     })
    // }
    // const { data, isLoading, error } = useFetch(applicationName + 'signup', {...requestOptions})
    // return { data, isLoading, error }
}
    