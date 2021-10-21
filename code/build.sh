#!/bin/sh
npm install
cd djangoApp/
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
