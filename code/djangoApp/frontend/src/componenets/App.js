import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import {store} from '../redux/store';
import {Provider} from 'react-redux'
// import BottomAppBar from './BottomAppBar';
function App() {
  return (
      <div>
          <Router>
                <div className="App">
                    <Switch >
                        <Route exact path="/">
                            <Home/>
                        </Route>
                    </Switch>
                    {/* <Home/> */}
                    <Navbar/>
                </div>
            </Router>
             {/* <Home/> */}
      </div>
  );
}
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'))