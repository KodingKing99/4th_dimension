import useFetch from "react-fetch-hook"
import axios from "axios";
const applicationName = 'http://127.0.0.1:8000/api/'
let requestOptions = {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
}
export const getAllTournaments = () => {
    console.log("Getting all tournaments...")
    const {data, isLoading, error} = useFetch(applicationName + 'tournament/');
    return {data, isLoading, error}
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