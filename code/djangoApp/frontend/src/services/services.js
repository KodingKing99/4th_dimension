import useFetch from "react-fetch-hook"
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
}