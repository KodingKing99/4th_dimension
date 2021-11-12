import React from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../services/services";
const ManageUsersPage = (props) => {
    getAllUsers();
    let userList = useSelector((state) => state.data.userList)
    console.log(userList)
    return ( 
        <div className="homeTop" style={{marginTop: '100px'}}>
            <p>In Game View</p>
                    </div>
     );
}
 
export default ManageUsersPage;