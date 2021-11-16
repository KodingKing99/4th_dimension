import useFetch from "react-fetch-hook"
import {store} from '../redux/store'
// import { useDispatch } from "react-redux";
import { setTournaments, addTournament, editStoreTournament, resetData, deleteStoreTournament, setUserList, deleteStoreUser, editStoreUser} from "../redux/dataSlice";
import axios from "axios";
const applicationName = 'http://127.0.0.1:8000/api/'
let requestOptions = {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
}
//////////
// Tournaments
//////////
export const getAllTournaments = () => {
    console.log("fetching tournaments...")
    axios.get(applicationName + 'tournament/').then((response) => {
        console.log("Fetched tourneys")
        store.dispatch(setTournaments(response.data));
    }).catch(err => console.log(err));
}
export const createTournament = (date, sponsorId, prize, holeCount) => {  
    let data = {
        tournamentdate: date,
        tournamentsponsor: sponsorId,
        tournamentprize: prize,
        tournamentholecount: holeCount
    }
    axios.post(applicationName + 'tournament/', data).then((response) => {
        console.log(response);
        store.dispatch(addTournament(response.data));
    }).catch(err => {console.log(err)});
}
export const editTournament = (date, sponsorId, prize, holeCount, id) => {
    axios.put(applicationName + 'tournament/' + id + '/', {
        tournamentdate: date,
        tournamentholecount: holeCount,
        tournamentsponsor: sponsorId,
        tournamentprize: prize
    }).then((res) => {
        console.log(res);
        store.dispatch(editStoreTournament(res.data));
    }).catch((err) => {
        console.log(err);
    })
}
export const deleteTourament = (tournamentid) => {
    axios.delete(applicationName + 'tournament/' + tournamentid + '/').then((res) => {
        console.log(res);
        store.dispatch(deleteStoreTournament(tournamentid));
    }).catch((err) => {
        console.log(err);
    })
}
export const getAllActiveTournaments = () => {
    axios.get(applicationName + 'tournamentGetAllActive/').then((res) => {
        console.log(res);
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
}
export const activateTournament = async (tourney) => {
    let t = {...tourney}
    t.tournamentactiveflag = true;
    console.log(t);
    axios.put(applicationName + 'tournament/' + tourney.tournamentid + '/', {
        ...t
    }).then((res) => {
        console.log(res);
        store.dispatch(editStoreTournament(res.data))
        return res;
    }).catch((err) => {console.log(err)})
}
////////////
// Transactions
////////////
export const getAllTransactions = async () => {
    const response = await axios.get(applicationName + 'transactionHistory/');
    return response.data;
}
export const getAllActiveTransactions = async () => {
    let response = await axios.get(applicationName + 'transactionHistoryActiveOnly/');
    return response.data;
}
export const deleteTrancaction = async (id) => {
    let response = await axios.delete(applicationName + 'transactionHistory/' + id);
    return response.data;
}
export const completeTransaction = async (item) => {
    console.log(item)
    let response = await axios.put(applicationName + 'transactionHistory/' + item.transactionid + '/', {...item, transactionactiveflag: false});
    return response.data;
}
export const createNewTransaction = async (buyerId, drinkMeisterId, price, date=Date.now(), active=true) => {
    date = new Date(date)
    const response = await axios.post(applicationName + 'transactionHistory/', {
        transactionbuyer: buyerId,
        transactiondrinkmeister: drinkMeisterId,
        transactionprice: price,
        transactiondate: date,
        transactionactiveflag: active
    });
}

export const transferMoney = async (fromId, toId, amount) => {
    amount = parseFloat(amount);
    const fromUser = await axios.get(applicationName + 'user/' + fromId + '/');
    if(fromUser.data.useraccount < amount || amount < 0) {
        return false;
    }
    await axios.put(applicationName + 'user/' + fromId + '/', {
        ...fromUser.data,
        useraccount: parseFloat((parseFloat(fromUser.data.useraccount) - amount).toFixed(2))
    });
    const toUser = await axios.get(applicationName + 'user/' + toId + '/');
    await axios.put(applicationName + 'user/' + toId + '/', {
        ...toUser.data,
        useraccount: parseFloat((parseFloat(toUser.data.useraccount) + amount).toFixed(2))
    });
    return true;
}
//////////
// Login/User
/////////
export const getUserById = async (id) => {
    const user = await axios.get(applicationName + 'user/' + id);
    // Translate the response into a user object
    let resData = user.data;
    let role = "player" // Default role
    switch (resData.userrole) {
        case 1:
            role = "player"
            break;
        case 2:
            role = "drinkMeister"
            break;
        case 3:
            role = "manager"
            break;
        case 4:
            role = "sponsor"
            break;
        case 5:
            role = "owner"
    }
    const data = {
        firstName: resData.userfirstname,
        lastName: resData.userlastname,
        fullName: resData.userfirstname + " " + resData.userlastname,
        id: resData.userid,
        email: resData.useremail,
        role: role,
        account: resData.useraccount,
        // permissions: response.data.permissions
    }
    return data;
}
export const getAllUsers = () => {
    axios.get(applicationName + 'user/').then((res) => {
        console.log(res)
        store.dispatch(setUserList(res.data))
    }).catch((err) => {
        console.log(err)
    })
}
export const deleteUserById = (id) => {
    axios.delete(applicationName + 'user/' + id + '/').then((res) => {
        console.log(res);
        store.dispatch(deleteStoreUser(id));
    }).catch((err) => {
        console.log(err);
    })
}
export const editUser = (user) => {
    console.log(user);
    axios.put(applicationName + 'user/' + user.userid + '/', {...user}).then((res) => {
        console.log(res);
        store.dispatch(editStoreUser(res.data))
    }).catch((err) => {
        console.log(err);
    })
}
export const login = async (email, password) => {
    try {
        let response = await axios.get(applicationName + "login/", {
            params: {
                email: email,
                password: password
        }});
        if(response.data.length === 0) {
            return {error: "Invalid credentials"}
        }
        // Translate the response into a user object
        let resData = response.data[0];
        let role = "player" // Default role
        switch (resData.userrole) {
            case 1:
                role = "player"
                break;
            case 2:
                role = "drinkMeister"
                break;
            case 3:
                role = "manager"
                break;
            case 4:
                role = "sponsor"
                break;
            case 5:
                role = "owner"
        }
        const data = {
            firstName: resData.userfirstname,
            lastName: resData.userlastname,
            fullName: resData.userfirstname + " " + resData.userlastname,
            id: resData.userid,
            email: resData.useremail,
            role: role,
            account: resData.useraccount,
            // permissions: response.data.permissions
        }
        return data;
    } catch (error) {
        return {error: error};
    }   
}

export const signup = async (email, firstName, lastName, password, role = 1) => {
    try {
        const response = await axios.post(applicationName + "signup/", {
            useremail: email,
            userfirstname: firstName,
            userlastname: lastName,
            userpassword: password,
            // useraccount: null,
            userrole: role,
        }).catch(err => {
            return {error: err};
        });
        if(response.error) {
            return {error: response.error.response.data};
        }
        return {success: "Successfully signed up"};
    } catch (error) {
        return {error: error};
    }
}

export const depositMoney = async (uid, amount) => {
    try {
        amount = parseFloat(amount);
        const user = await axios.get(applicationName + 'user/' + uid + '/');
        const res = await axios.put(applicationName + 'user/' + uid + '/', {
            ...user.data,
            useraccount: (parseFloat(user.data.useraccount) + amount).toFixed(2)
        });
        store.dispatch(setAccount(res.data.useraccount));
        return true;
    } catch (error) {
        return { error: error };
    }
}

export const changeName = async (uid, firstName, lastName) => {
    try {
        const user = await axios.get(applicationName + 'user/' + uid + '/');
        await axios.put(applicationName + 'user/' + uid + '/', {
            ...user.data,
            userfirstname: firstName,
            userlastname: lastName
        });
        return true;
    } catch (error) {
        return { error: error };
    }
}
////////////
// 
    
export const changeMenuItem = async (id, name, price, description, image) => {
    console.log(id, name, price, description, image)  
    try {
        const currentMenuItem = await axios.get(applicationName + 'menu/' + id + '/');
        await axios.put(applicationName + 'menu/' + id + '/', {
            ...currentMenuItem.data,
            itemname: name,
            itemprice: price,
            itemdescription: description,
            itemimage: image,
        });
        return true;
    }
    catch (error) {
        return { error: error };
    }
}

export const deleteMenuItem = async (id) => {
    try {
        await axios.delete(applicationName + 'menu/' + id + '/');
        return true;
    }
    catch (error) {
        return { error: error };
    }
}

export const addMenuItem = async (name, price, description, image) => {
    console.log(image, name, price, description);
    try {
        await axios.post(applicationName + 'menu/', {
            itemname: name,
            itemprice: price,
            itemdescription: description,
            itemimage: image,
        });
        return true;
    }
    catch (error) {
        return { error: error };
    }
}

export const getAllMenuItems = async () => {
    try {
        const response = await axios.get(applicationName + 'menu/');
        return response.data;
    }
    catch (error) {
        return { error: error };
    }
}
