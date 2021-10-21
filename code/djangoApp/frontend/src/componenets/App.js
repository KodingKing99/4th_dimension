import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
import BottomNavigationBar  from "./BottomNavigationBar";

// import BottomAppBar from './BottomAppBar';
function App() {
    const playerPath = ["Game","Drinks","Leaderboards","Account"]
    const role = "player"
    const getPage = () => {

    }

  return (
      <div>
          <Router>
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
                    <Route exact path="/game">
                    <GamePage/>
                    </Route>
                    <Route exact path="/drinks">
                    <OrderDrinkPage/>
                    </Route>
                    <Route exact path="/leaderboard">
                    <LeaderBoardPage/>
                    </Route>
                    <Route exact path="/account">
                    <AccountPage/>
                    </Route>
                    <Route exact path="/drink-orders">
                    <DrinkOrdersPage/>
                    </Route>
                    <Route exact path="/manage-tournaments">
                    <ManageTournamentsPage/>
                    </Route>
                    <Route exact path="/manage-drinks">
                    <ManageDrinksPage/>
                    </Route>
                    <Route exact path="/manage-users">
                    <ManageUsersPage/>
                    </Route>
                    <Route exact path="/manage-refunds">
                    <ManageRefundsPage/>
                    </Route>
                    <Route exact path="/owner-manage-users">
                    <OwnerManageUsersPage/>
                    </Route>
                    <Route exact path="/money">
                    <MoneyPage/>
                    </Route>
                    </Switch>
                    <Navbar/>
                    <BottomNavigationBar paths = {playerPath} role={role} ></BottomNavigationBar>
                    {/* <BottomAppBar/> */}
                </div>
            </Router>
                
           
          
      </div>
  );
}
ReactDOM.render(<App/>, document.getElementById('app'))
      
    // <Router>    
    //   <div className="App">
    //     <div className="content">
    //       <Switch>
    //         <Route exact path="/">
    //           <Home/>
    //         </Route>
    //         {/* <Route path="/create">
    //           <Create/>
    //         </Route>
    //         <Route path="/blogs/:id">
    //           <BlogDetails/>
    //         </Route> 
    //         <Route path="*">
    //           <NotFound/>
    //         </Route> */}
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
