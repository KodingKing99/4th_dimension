import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import './Home.css'
const Home = (props) => {
    const fullName = useSelector((state) => state.user.fullName);
    // console.log(fullName);
    // const fullName = "Nick Sorenson"
    console.log("Hello!")
    return ( 
        <div className="homeTop" style={{marginTop: '100px'}}>
            <h1>Hello { fullName }! Welcome to the 4D Putt Putt Home page</h1>
            {/* <h1>Hellllllllllllloooooooooooo?</h1> */}
            <h2>About Us</h2>
            <div className="homeBody">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim quam, egestas dictum cursus nec, sodales in ante. Nunc enim ante, rhoncus sed arcu sed, pharetra congue massa. Maecenas a mauris quis mi laoreet convallis. Nunc at lacus diam. Phasellus eget suscipit lorem. Aliquam massa metus, semper non erat et, ultricies eleifend orci. Vivamus sagittis consectetur sapien at facilisis. In fermentum nunc ut rutrum fermentum. Phasellus ex nulla, rhoncus non enim eget, porta congue eros. Sed sed tristique massa. Maecenas sem magna, congue non blandit ac, pellentesque eget dolor. Donec facilisis sapien ullamcorper tincidunt pulvinar. Curabitur tincidunt eu velit a ultrices. Proin risus odio, convallis vitae risus malesuada, euismod ultricies dolor. Curabitur mollis, sapien vel tincidunt hendrerit, metus nibh iaculis arcu, at tempus tortor enim et nibh.</p>
                <p>Donec eleifend dictum orci, scelerisque consequat odio egestas sit amet. Pellentesque molestie nunc quam, id scelerisque mi mattis eget. Donec vestibulum eros id dui euismod, nec lacinia mi tempus. Suspendisse sed libero eget dolor auctor consectetur. Quisque posuere, metus vel condimentum vestibulum, tellus magna facilisis eros, et consequat orci lacus non ipsum. Nunc fermentum velit non arcu rhoncus fermentum. Maecenas fringilla tempus odio id finibus. Donec facilisis in nisi eget convallis. Sed vulputate ultrices purus, non interdum nisl eleifend in. Nulla et quam fermentum, ultricies massa id, maximus sem.</p>
                <p>Vestibulum cursus ligula ut leo consectetur tempor. Donec orci est, bibendum at maximus sit amet, cursus sed quam. Sed porttitor magna eu quam gravida, vel commodo elit ultrices. Ut quis gravida tellus. Phasellus dui ante, laoreet at laoreet sed, eleifend ac metus. Curabitur ut mi aliquet, tempor libero quis, ultricies turpis. Suspendisse sed scelerisque magna. Sed quis nulla eget odio sagittis convallis. Mauris bibendum erat vitae elementum fermentum. Nulla lobortis fermentum metus, ultrices iaculis nisi sagittis in. Aenean in euismod orci. Nullam quis consequat mauris. Vivamus tempor sem quis ornare imperdiet. Suspendisse a lectus vitae tortor posuere feugiat nec eget augue. Curabitur non enim rutrum, iaculis purus vel, eleifend massa.</p>
                <Link to="/tournament">tournament</Link>
            </div>
        </div>
     );
}
 
export default Home;