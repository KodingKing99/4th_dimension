import React from "react";
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

import AddTournamentPage from "./Pages/AddTournamentPage";

import Navbar from './Navbar/Navbar';

import {store} from '../redux/store';
import {Provider} from 'react-redux'
import BottomNavigationBar  from "./BottomNavigationBar";
import PermissionsPractice from "./PermissionsPractice";
import Tournament from "./Tournament/Tournament";
import CreateTournament from "./Tournament/CreateTournament";
// import BottomAppBar from './BottomAppBar';
function App() {
    const playerPath = ["Game","Drinks","Leaderboards","Account"]
    const role = "player"
    const getPage = () => {

    }
    
  return (
      <div>

          <PermissionsPractice/>
          <Tournament/>
          <CreateTournament/>
          <HashRouter>
                <div className="App">
                    <Switch >
                        <Route exact path="/">
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

                    </Switch>
                    <Navbar/>
                    <BottomNavigationBar paths = {playerPath} role={role} ></BottomNavigationBar>
                </div>
            </HashRouter>
             {/* <Home/> */}
      </div>
  );
}
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'))