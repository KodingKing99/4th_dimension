import React from 'react';
import { getAllTournaments } from '../../services/services';
import { useSelector } from 'react-redux';
import { fetchTournaments } from '../../redux/dataSlice';
const Tournament = (props) => {
    // const {data, isLoading} = getAllTournaments();
    // fetchTournaments();
    const data = useSelector((state) => state.data.tournaments);
    console.log(data);
    return ( 
        <>
        {data && data.map((Tournament) => {
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