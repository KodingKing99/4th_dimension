import React from 'react';
import { getAllTournaments } from '../../services/services';
const Tournament = (props) => {
    const {data, isLoading} = getAllTournaments();
    console.log(data);
    return ( 
        <>
        {isLoading && <div>Loading...</div>}
        {!isLoading && data.map((Tournament) => {
            return (
            <ul key={Tournament.tournamentid}>
                <li>{Tournament.tournamentdate}</li>
                <li>{Tournament.tournamnetsponsor}</li>
                <li>{Tournament.tournamentprize}</li>
                <li>{Tournament.tournamentholecount}</li>
            </ul>);
        })}
        </>
     );
}
 
export default Tournament;