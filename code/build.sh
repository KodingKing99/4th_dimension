#!/bin/sh
npm install
npm run dev &
cd djangoApp/
python manage.py migrate
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
