import useFetch from "react-fetch-hook"
const applicationName = 'http://127.0.0.1:8000/api/'
let requestOptions = {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
}
export const getAllTournaments = () => {
    console.log("Getting all tournaments...")
    const {data, isLoading, error} = useFetch(applicationName + 'tournament/');
    return {data, isLoading, error}
}
export const createTournament = (date, sponsorId, prize, holeCount) => {  
    requestOptions = {
        ...requestOptions,
        body: JSON.stringify({ 
            tournamentdate: date,
            tournamnetsponsor: sponsorId,
            tournamentprize: prize,
            tournamentholecount: holeCount
        })
    };
    const {data, isLoading, error} = useFetch(applicationName + 'tournament/', {...requestOptions});
    return {data, isLoading, error};
}

export const login = (email, password) => {
    const {data, isLoading, error} = useFetch(applicationName + "login/?email="+email.replace('@','%40')+"&password="+password)
    console.log(data,"here")
    return {data, isLoading, error}
}

export const signup = (email, firstName, lastName, password, role = 1) => {
    requestOptions = {
        ...requestOptions,
        body: JSON.stringify({
            useremail: email,
            userfirstname: firstName,
            userlastname: lastName,
            userpassword: password,
            userrole: role,
        })
    }
    const { data, isLoading, error } = useFetch(applicationName + 'signup', {...requestOptions})
    return { data, isLoading, error }
    // fetch("api/signup/",
    // {
    //     method: 'POST',
    //     body: {
    //         "useremail": userEmail,
    //         "userfirstname": userFirstName,
    //         "userlastname": userLastName,
    //         "userpassword": userPassword,
    //         "userrole": userRole,
    //     },
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    // })
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .then(data => {
    //         console.log(data)
    //     })
}