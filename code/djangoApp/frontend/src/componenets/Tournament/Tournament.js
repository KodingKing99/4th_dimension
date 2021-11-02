import React, { useEffect } from 'react';
import { getAllTournaments } from '../../services/services';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTournaments } from '../../redux/dataSlice';
const Tournament = (props) => {
    // Call getAllTournaments once
    useEffect(() => {
        getAllTournaments();
    }, []);
    const data = useSelector((state) => state.data.tournaments);
    console.log(data);
    return ( 
        <>
        {data && data.map((Tournament) => {
            return (
            <ul key={Tournament.tournamentid}>
                <li>{Tournament.tournamentdate}</li>
                <li>{Tournament.tournamentsponsor}</li>
                <li>{Tournament.tournamentprize}</li>
                <li>{Tournament.tournamentholecount}</li>
            </ul>);
        })}
        </>
     );
}
 
export default Tournament;