import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
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
