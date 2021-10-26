#!/bin/sh
npm install
npm run dev &
cd djangoApp/
if [ "$1" = "-DB" ]
then
    rm db.sqlite3
    printf "\nDeleted db\n"
fi
python manage.py migrate
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
