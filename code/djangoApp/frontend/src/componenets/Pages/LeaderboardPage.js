import React , {useState , useEffect} from "react";
import { Divider } from '@material-ui/core';
import { getAllTournamentParticipants , getUserById , getAllTournaments} from '../../services/services';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';

// import './Home.css'





const LeaderBoardPage = (props) => {

    const [users, setUsers] = useState([]); 
    const [tournaments, setTournaments] = useState([]);
    const [tournamentParticipants, setTournamentParticipants] = useState([]);

    useEffect(() => {
        getAllTournamentParticipants().then(res => {
            let tempUsers = [];
            let tempTournamentParticipants = res;
            res.forEach(element => {
                if(findUser(element.userid,tempUsers)===-1){
                    tempUsers.push(element);
                }
                else {
                    tempUsers[findUser(element.userid,tempUsers)].userscore += element.userscore;
                    setUsers(tempUsers);
                }
            });
        tempUsers.forEach(element => {
            getUserById(element.userid).then(res => {
                tempUsers[findUser(element.userid,tempUsers)].name = res.firstName + " " + res.lastName;
                setUsers([...tempUsers]);
            });
        });

        tempTournamentParticipants.forEach(element => {
            getUserById(element.userid).then(res => {
                tempTournamentParticipants[findUser(element.userid,tempTournamentParticipants)].name = res.firstName + " " + res.lastName;
                setTournamentParticipants([...tempTournamentParticipants]);
            });
        });
        

            getAllTournaments().then(res => {
            let tempTournaments = [];
            console.log("result",res);
            res.forEach(element => {
                let tempTournament = {
                    date : element.tournamentdate,
                    tournamentHoleCount :element.tournamentholecount,
                    tournamentPrize :element.tournamentprize,
                    tournamentSponsor: element.tournamentsponsor,
                    participants : []
                }
                tempTournamentParticipants.forEach(element2 => {
                    if(element.tournamentid === element2.tournamentid){
                        tempTournament.participants.push(element2);
                    }
                });
                tempTournaments.push(tempTournament);
    });
    let sortedTempTournament = tempTournaments.sort((a,b) => {
        return b.tournamentid<a.tournamentid;
    });
    setTournaments(sortedTempTournament);
});
    });
      },[]);


      //Find the index of user in an array of users and return index
        const findUser = (userid,users) => {
            let index = -1;
            if(users === undefined || users.length === 0){
                return index;
            }
            users.forEach(element => {
                if(element.userid === userid){
                    index = users.indexOf(element);
                }
            });
            return index;
        }


      //find user by id and return true if it is found in the array of users
        // const findUser = (id) => {
        //     let found = false;
        //     users.forEach(element => {
        //         if(element.userid === id){
        //             found = true;
        //         }
        //     });
        //     return found;
        // }

      
    return ( 
        <div className="homeTop" style={{marginTop: '100px'}}>
            <h2>All Time</h2>
            {users.map((item)=>{
            return (<Box><p>{item.name}:{item.userscore}</p></Box>)
            }
          )}

            <Divider sx={{margin:1}} variant="middle" />
<h2>Per Tournament</h2>
{tournaments.map((item)=>{
            return (<Box><h2>{item.date}</h2>
            {item.participants.map((item2)=>{
                return (<Box><p>{item2.name}:{item2.userscore}</p></Box>)
            })}
            </Box>)
            }
          )}

             </div>

             
     );
}
 
export default LeaderBoardPage;