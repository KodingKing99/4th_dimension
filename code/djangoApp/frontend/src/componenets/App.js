import React from "react";
import ReactDOM from 'react-dom';
// import {Router} from 'react-router-dom';
// const App = (props) => {
//     return (
//         <div>Hello!</div>
//      );
// }
class App extends React.Component{
    render(){
        return <div>Hello!</div>
    }
}
ReactDOM.render(<App/>, document.getElementById('app'))
// export default App;