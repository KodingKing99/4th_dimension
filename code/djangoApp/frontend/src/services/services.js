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
        store.dispatch(setTournaments(response.data));
    }).catch(err => console.log(err));
}
export const createTournament = (date, sponsorId, prize, holeCount) => {  
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