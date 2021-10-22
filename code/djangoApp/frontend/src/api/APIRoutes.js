import {store} from '../redux/store'

export const login = (email, password) => {
    fetch("api/login/?email="+email.replace('@','%40')+"&password="+password)
        .then(response => {
            if (response.status > 400) {
                return {response: "Error"}
            }
        })
        .then(data => {
            console.log(data)
            return data;
        })
}

export const signup = (userEmail) => {
    fetch("api/login/",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: {
            "useremail": "",
            "userfirstname": "",
            "userlastname": "",
            "userpassword": "",
            "useraccount": null,
            "userrole": null,
            "usersalt": ""
        },
    })
        .then(response => {
            console.log(response)
        })
        .then(data => {
            console.log(data)
        })
}