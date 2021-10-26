#!/bin/sh

# This script tests for needed programs and runs start commands
# Add the -DB flag to delete and build the default database

# Test for npm
npm=$(npm -version)
if [ -z $npm ]
then
    printf "\nnpm not found, please install npm\n"
    exit -1
else
    printf "\nnpm found! version $npm\n"
fi

npm install
npm run dev &

cd djangoApp/

# If db does not exist does not matter
if [ "$1" = "-DB" ]
then
    rm db.sqlite3
    printf "\nDeleted db\n"
fi

# Test for python
python=$(python -V)
if [ -z $python ]
then
    printf "\npython not found, please install python 3\n"
    exit -1
else
    printf "\npython found! version $python\n"
fi

# Test for django
django=$(python -m django --version)
if [ -z $django ]
then
    printf "\ndjango not found, please install django\n"
    exit -1
else
    printf "\ndjango found! version $django\n"
fi

# Migrate seems to be needed to run twice
python manage.py migrate
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
