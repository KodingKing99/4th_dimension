import React, { useState } from 'react';
import useFetch from "react-fetch-hook"

// import { createTournament } from '../../services/services';
const CreateTournament = (props) => {
    // const {data, isLoading} = getAllTournaments();
    const [sponsorid, setSponsorId] = useState();
    const [date, setDate] = useState();
    const [holecnt, setHoleCnt] = useState();
    const [prize, setPrize] = useState();
    // const [sponsorid, setSponsorId] = useState();
    // const createMyTourney = (date, sponsorid, prize, holecnt) => {
    //     const{data, isLoading, error} = 
    // }
    // console.log(data);
    const applicationName = 'http://127.0.0.1:8000/api/'
    let requestOptions = {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
}
    const createTournament = (date, sponsorId, prize, holeCount) => {  
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
        if(data){console.log(data)}
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting...")
        console.log(`sponsor id:`)
        console.log(sponsorid)
        console.log(`date:`)
        console.log(date)
        console.log(`hole count:`)
        console.log(holecnt)
        console.log(`prize:`)
        console.log(prize)
        createTournament(date, sponsorid, prize, holecnt);
        // console.log(data);
    }
    return ( 
        <>
            <form>
                <label>Sponsor id</label>
                <input type="number" onChange={(e) => setSponsorId(e.target.value)}/>
                <label>date</label>
                <input type="datetime-local" onChange={(e) => setDate(e.target.value)}/>
                <label>Hole Count: </label>
                <input type="number" onChange={(e) => setHoleCnt(e.target.value)}/>
                <label>Prize</label>
                <input type="number" onChange={(e) => setPrize(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <div>Hello from create tournament</div>
        </>
     );
}
 
export default CreateTournament;