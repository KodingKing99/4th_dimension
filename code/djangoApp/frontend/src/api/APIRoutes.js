import {store} from '../redux/store'

export const login = (email, password) => {
    console.log("/api/login/?email="+email.replace('@','%40')+"&password="+password)
    fetch("/api/login/?email="+email.replace('@','%40')+"&password="+password)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data;
        })
}

export const signup = (userEmail, userFirstName, userLastName, userPassword, userRole = 1) => {
    fetch("api/signup/",
    {
        method: 'POST',
        body: {
            "useremail": userEmail,
            "userfirstname": userFirstName,
            "userlastname": userLastName,
            "userpassword": userPassword,
            "userrole": userRole,
        },
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            console.log(response)
        })
        .then(data => {
            console.log(data)
        })
}