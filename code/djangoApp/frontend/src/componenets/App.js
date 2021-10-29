import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
// import {HashRouter as HashRouter, Route, Switch} from 'react-router-dom';
import { HashRouter, Route ,Switch,Link} from "react-router-dom";
import GamePage from './Pages/GamePage'
import OrderDrinkPage from "./Pages/OrderDrinksPage";
import LeaderBoardPage from "./Pages/LeaderboardPage";
import AccountPage from "./Pages/AccountPage";
import DrinkOrdersPage from "./Pages/DrinkOrdersPage";
import ManageTournamentsPage from "./Pages/ManageTournamentsPage"
import ManageDrinksPage from "./Pages/ManageDrinksPage";
import ManageUsersPage from "./Pages/ManageUsersPage";
import ManageRefundsPage from "./Pages/ManageRefundsPage";
import OwnerManageUsersPage from "./Pages/OwnerManageUsersPage";
import MoneyPage from "./Pages/MoneyPage";
import ManageSponsorshipPage from "./Pages/manage-sponsorshipPage";

import AddTournamentPage from "./Pages/AddTournamentPage";

import Paper from '@mui/material/Paper';


import Navbar from './Navbar/Navbar';
import Login from './Login/Login'

import { store } from '../redux/store';
import { Provider, useSelector } from 'react-redux'
import BottomNavigationBar from "./BottomNavigationBar";
import PermissionsPractice from "./PermissionsPractice";
import Tournament from "./Tournament/Tournament";
import CreateTournament from "./Tournament/CreateTournament";
import { Container } from "@mui/material";
import { Box, display } from "@mui/system";
// import BottomAppBar from './BottomAppBar';
function App() {
    const playerPath = ["Game", "Drinks", "Leaderboards", "Account"]
    const userId = useSelector((state) => state.user.id)
    
    const role = "";
    const getPage = () => {

    }
    
  return (
      <div>
          {!userId ? <Login /> :
          <>
          <Box sx={{
              margin:'20px',
              display:'flex',
          }}>
          <PermissionsPractice/>
          <Tournament/>
          <CreateTournament/>
          </Box>
          {/* <Tournament/> */}
          <Container>
          <HashRouter>
                <div className="App">
                    <Switch >

                        <Route exact path="/" style="margin:20px;">
                            {role=="player" &&
                            <GamePage/>
                            }
                            {role=="drinkMiester" &&
                            <DrinkOrdersPage/>
                            }
                            {role=="manager"&&
                            <ManageTournamentsPage/>
                            }
                            {role=="owner"&&
                            <OwnerManageUsersPage/>
                            }
                        
                        </Route>
                        {/* <Route path="tournament">
                            <Tournament/>
                        </Route> */}
                        <Box>
                    <Route exact path="/#game">
                    <GamePage/>
                    </Route>
                    <Route path="/game" component={GamePage}>
                    </Route>
                    <Route path="/drinks" component={OrderDrinkPage}>
                    </Route>
                    <Route path="/leaderboard">
                    <LeaderBoardPage/>
                    </Route>
                    <Route path="/account">
                    <AccountPage/>
                    </Route>
                    <Route path="/drink-orders">
                    <DrinkOrdersPage/>
                    </Route>
                    <Route path="/manage-tournaments">
                    <ManageTournamentsPage/>
                    </Route>
                    <Route  path="/manage-drinks">
                    <ManageDrinksPage/>
                    </Route>
                    <Route path="/manage-users">
                    <ManageUsersPage/>
                    </Route>
                    <Route path="/manage-refunds">
                    <ManageRefundsPage/>
                    </Route>
                    <Route path="/owner-manage-users">
                    <OwnerManageUsersPage/>
                    </Route>
                    <Route path="/money">
                    <MoneyPage/>
                    </Route>


                    <Route path="/add-tournament">
                        <AddTournamentPage></AddTournamentPage>
                    </Route>

                    <Route path="/manage-sponsorship">
                        <ManageSponsorshipPage></ManageSponsorshipPage>
                    </Route>
</Box>
                    </Switch>
                    <Navbar/>
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigationBar paths = {playerPath} role={role} ></BottomNavigationBar>
            </Paper>
                </div>
            </HashRouter>
</Container>
            </>
            }
           

             {/* <Home/> */}
      </div>
  );
}
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))
