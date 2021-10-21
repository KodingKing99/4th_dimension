#!/bin/sh
npm install
npm run dev
cd djangoApp/
python manage.py makemigrations
python manage.py migrate

