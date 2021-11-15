import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
// import {HashRouter as HashRouter, Route, Switch} from 'react-router-dom';
import { HashRouter, Route, Switch, Link } from "react-router-dom";

import GamePage from './Pages/GamePage'
import OrderDrinkPage from "./Pages/OrderDrinksPage";
import LeaderBoardPage from "./Pages/LeaderboardPage";
import AccountPage from "./Pages/AccountPage";
import DrinkOrdersPage from "./Pages/DrinkOrdersPage";
import ManageTournamentsPage from "./Pages/Tournament/ManageTournamentsPage"
import ManageDrinksPage from "./Pages/ManageDrinksPage";
import ManageUsersPage from "./Pages/ManageUsers/ManageUsersPage";
import ManageRefundsPage from "./Pages/ManageRefundsPage";
import OwnerManageUsersPage from "./Pages/OwnerManageUsersPage";
import MoneyPage from "./Pages/MoneyPage";
import ManageSponsorshipPage from "./Pages/manage-sponsorshipPage";
import Menu from "./Menu/Menu";
import Money from "./Money/Money"

import AddTournamentPage from "./Pages/Tournament/AddTournamentPage";

import Paper from '@mui/material/Paper';


import Navbar from './Navbar/Navbar';
import Login from './Login/Login'

import { store } from '../redux/store';
import { Provider, useSelector } from 'react-redux'
import BottomNavigationBar from "./BottomNavigationBar";
import PermissionsPractice from "./PermissionsPractice";
import { Container } from "@mui/material";
import { Box, display } from "@mui/system";
import Orders from "./Orders/Orders";
import Refunds from "./Refunds/Refunds";
import "./App.css"
// import BottomAppBar from './BottomAppBar';
function App() {
    const playerPath = ["Game", "Drinks", "Leaderboards", "Account"]
    const userId = useSelector((state) => state.user.id)
    const role = useSelector((state) => state.user.role)

    return (
        <div id="root">
            <Box sx={{
                margin: '20px',
                display: 'flex',
            }}>
            </Box>


            <Container>
                <HashRouter>
                    {!userId ? <Login /> :
                        <>
                            <div className="App">
                                <PermissionsPractice />

                                <Switch >

                                    <Route exact path="/" style="margin:20px;">
                                        {role == "player" &&
                                            <GamePage />
                                        }
                                        {role == "drinkMeister" &&
                                            <Orders />
                                        }
                                        {role == "manager" &&
                                            <ManageTournamentsPage />
                                        }
                                        {role == "owner" &&
                                            <OwnerManageUsersPage />
                                        }
                                    </Route>
                                    <Box>
                                        <Route exact path="/#game">
                                            <GamePage />
                                        </Route>
                                        <Route path="/game" component={GamePage}>
                                        </Route>
                                        <Route path="/drinks" >
                                            <Menu />
                                        </Route>
                                        <Route path="/leaderboard">
                                            <LeaderBoardPage />
                                        </Route>
                                        <Route path="/account">
                                            <AccountPage />
                                        </Route>
                                        <Route path="/drink-orders">
                                            <Orders />
                                        </Route>
                                        <Route path="/manage-tournaments">
                                            <ManageTournamentsPage />
                                        </Route>
                                        <Route path="/manage-drinks">
                                            <Menu />
                                        </Route>
                                        <Route path="/manage-users">
                                            <ManageUsersPage />
                                        </Route>
                                        <Route path="/manage-refunds">
                                            <Refunds />
                                        </Route>
                                        <Route path="/owner-manage-users">
                                            <OwnerManageUsersPage />
                                        </Route>
                                        <Route path="/money">
                                            <Money />
                                        </Route>


                                        <Route path="/add-tournament">
                                            <AddTournamentPage></AddTournamentPage>
                                        </Route>

                                        <Route path="/manage-sponsorship">
                                            <ManageSponsorshipPage />
                                        </Route>
                                    </Box>
                                </Switch>
                                <Navbar />
                                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                                    <BottomNavigationBar paths={playerPath} role={role} ></BottomNavigationBar>
                                </Paper>
                            </div>
                        </>
                    }
                </HashRouter>
            </Container>


            {/* <Home/> */}

        </div>
    );
}
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))
