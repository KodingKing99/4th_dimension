# Putt Putt Golf
Create a Web app to manage and track Golf tournaments as well as features to manage and order drinks, keep track of players scores, and advertise sponsors. 

## Workspace Layout
The folder src will contain all the source files for this web app. Inside src we will have web-app folder for the web app source code. We will also have another folder called backend. In this folder it will have our server code or the back end code. 
```
└──root
    ├── src/
        ├── web-app
        └── backend
    └── Requirements
```
## Version-control Procedures
Player: Jim@mail.com Password: Jim 
Player: Jim@mail.com Password: Jim 
Player: Jim@mail.com Password: Jim 
Player: Jim@mail.com Password: Jim 
Player: Jim@mail.com Password: Jim 


Using github collaborators fork from Nicks github. Collaborators should fork and clone repo and then creat a merge request.
## User List for testing roles


## Tool stack description and setup procedure

Javascript React Framework - This is a very widly used framework that allows us to make and create different web components that can be reactive. That is we can easily pass information to different components and then those components will react.
Django database - Using Django database system to store and save data. Django is another very widly used and robost backend database and hosting system.
Django backend - Host the web app

## Build Instructions
You must have npm (use the node.js install for easy windows install https://nodejs.org/en/download/ or your linux package manager) and python with pip installed and in your system path.
### Windows
clone repository ` $ git clone https://github.com/KodingKing99/4th_dimension.git` 

run `code/build.bat`

open browser at `127.0.0.1:8000/`


### Linux / Mac
clone repository ` $ git clone https://github.com/KodingKing99/4th_dimension.git` 

run `sh code/build.sh`

open browser at `127.0.0.1:8000/`

### Manual Commands
Only use this method if the build script fails.

clone repository ` $ git clone https://github.com/KodingKing99/4th_dimension.git` 

run `npm install`

`npm run dev`

then open a new console and navagate to

`4th_dimension/code/djangoApp`

You must have django and djangorestframework installed.

run `python manage.py makemigrations`

`python manage.py migrate`

`python manage.py runserver`

open browser at `127.0.0.1:8000/`

## Login options

A testing account as available with email: Test password: Test

User roles can for now be changed while in the application to help you explore and test

Deploy to website
## Unit testing instructions

Using the use case diagrams we will test each of those use cases. Unit tests can be found in ```unitTest.js```

To run backend test cases run `4th_dimension/code/djangoApp manage.py test`
To run front end test cases run 'npm test' while in 'path_to_repo/4th_dimension/code/' 

## System testing Instructions
Navigate to the folder you have the repository stored and start a local server of your choice. Go to ```localhost:8000``` to test if it is running. Login using SystemTest, Password:systest


## Sprint Reports Location
Docs/Planning/
