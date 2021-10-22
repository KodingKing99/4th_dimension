import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
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
import Navbar from './Navbar/Navbar';
import Login from './Login/Login'

import { store } from '../redux/store';
import { Provider } from 'react-redux'
import BottomNavigationBar from "./BottomNavigationBar";
import PermissionsPractice from "./PermissionsPractice";
// import BottomAppBar from './BottomAppBar';
function App() {
    const playerPath = ["Game", "Drinks", "Leaderboards", "Account"]
    const role = "";
    const getPage = () => {

    }
    const [user, setUser] = useState(store.getState().user);

    console.log(store.getState());

    return (
        <Provider store={store}>
        <div>
            {/* <PermissionsPractice /> */}
            <Router>
                <div className="App">
                    {!user.id ? <Login /> : // If a user is not loaded load login
                        <div className="Home">
                            <Switch >
                                <Route exact path="/">
                                    {role == "player" &&
                                        <GamePage />
                                    }
                                    {role == "drinkMiester" &&
                                        <DrinkOrdersPage />
                                    }
                                    {role == "manager" &&
                                        <ManageTournamentsPage />
                                    }
                                    {role == "owner" &&
                                        <OwnerManageUsersPage />
                                    }
                                </Route>
                                <Route exact path="/#game">
                                    <GamePage />
                                </Route>
                                <Route exact path="/#drinks">
                                    <OrderDrinkPage />
                                </Route>
                                <Route exact path="/#leaderboard">
                                    <LeaderBoardPage />
                                </Route>
                                <Route exact path="/#account">
                                    <AccountPage />
                                </Route>
                                <Route exact path="/#drink-orders">
                                    <DrinkOrdersPage />
                                </Route>
                                <Route exact path="/#manage-tournaments">
                                    <ManageTournamentsPage />
                                </Route>
                                <Route exact path="/#manage-drinks">
                                    <ManageDrinksPage />
                                </Route>
                                <Route exact path="/#manage-users">
                                    <ManageUsersPage />
                                </Route>
                                <Route exact path="/#manage-refunds">
                                    <ManageRefundsPage />
                                </Route>
                                <Route exact path="/#owner-manage-users">
                                    <OwnerManageUsersPage />
                                </Route>
                                <Route exact path="/#money">
                                    <MoneyPage />
                                </Route>
                            </Switch>

                            <>
                                <Navbar />
                                <BottomNavigationBar paths={playerPath} role={role} ></BottomNavigationBar>
                            </>
                        </div>
                    }
                </div>
            </Router>
            {/* <Home/> */}
        </div>
        </Provider>
    );
}
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))
