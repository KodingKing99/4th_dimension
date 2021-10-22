import useFetch from "react-fetch-hook"
const applicationName = 'http://127.0.0.1:8000/api/'
// export const createTournament = (date, sponsorId, prize, holeCount) => {

// }
export const getAllTournaments = () => {
    console.log("Getting all tournaments...")
    const {data, isLoading, error} = useFetch(applicationName + 'tournament/');
    return {data, isLoading, error}
}