import useFetch from "react-fetch-hook"
import {store} from '../redux/store'
// import { useDispatch } from "react-redux";
import { setTournaments, addTournament, editStoreTournament, resetData, deleteStoreTournament } from "../redux/dataSlice";
import axios from "axios";
const applicationName = 'http://127.0.0.1:8000/api/'
let requestOptions = {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
}
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
// export const getAllActiveTournaments = () => {

// }
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
export const createNewTransaction = async (buyerId, drinkMiesterId, price, date, active=true) => {
    const response = await axios.post(applicationName + 'transactionHistory/', {
        buyer: buyerId,
        drinkMiester: drinkMiesterId,
        price: price,
        date: date,
        active: active
    });
    console.log(response);
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
            role = "drinkMiester"
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
                role = "drinkMiester"
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
    
