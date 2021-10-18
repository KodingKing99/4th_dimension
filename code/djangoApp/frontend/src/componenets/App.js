import React from "react";
import ReactDOM from 'react-dom';
import Login from './Login.js'
// import {Router} from 'react-router-dom';
// const App = (props) => {
//     return (
//         <div>Hello!</div>
//      );
// }
class App extends React.Component{
    render(){
        return (
            <Login />
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('app'))
// export default App;
