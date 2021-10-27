@REM This script tests for needed programs and runs start commands
@REM Add the -DB flag to delete and build the default database
@echo off
@REM Test for npm
call npm -v 2> nul 
@REM If npm is not found, exit
if "%errorlevel%" == "9009" (
    echo "npm not found. Please install npm and try again."
    exit /b -1
) else (
    echo npm found
)

call npm install
start /B npm run dev 

cd djangoApp/

@REM If db does not exist does not matter
if "%1" == "-DB" (
    del db.sqlite3
    echo "\nDeleted db\n"
)

@REM Test for python
call python -V 2> nul
@REM If python is not found, exit
if "%errorlevel%" == "9009" (
    echo "python not found. Please install python and try again."
    exit /b -1
) else (
    echo python found
)

@REM Test for django
@REM If django is not found, exit
for /f "delims=" %%V in ('python -m django --version') do @set django=%%V
if "%django%" == "" (
    echo "django not found. Trying to install..."
    call pip -V 2> nul
    if "%errorlevel%" == "9009" (
        echo "pip not found. Please install pip and try again."
        exit /b -1
    ) else (
        echo pip found
        call pip3 install django
        echo "django installed"
    )
) else (
    echo django found
)

@REM Test for djangorestframework
@REM If django is not found, exit
for /f "delims=" %%V in ('python -c "import rest_framework; print(rest_framework.VERSION)"') do @set djangorestframework=%%V
if "%djangorestframework%" == "" (
    echo "djangorestframework not found. Trying to install..."
    call pip -V 2> nul
    if "%errorlevel%" == "9009" (
        echo "pip not found. Please install pip and try again."
        exit /b -1
    ) else (
        echo pip found
        call pip install djangorestframework
        echo "django rest framework installed"
    )
) else (
    echo djangorestframework found
)

@REM Migrate seems to be needed to run twice
call python manage.py migrate
call python manage.py makemigrations
call python manage.py migrate

@REM Wait for frontend file to exist
set file="djangoApp\frontend\static\frontend\main.js"
:CheckForFrontend
if exist %file% goto Exists
echo "Waiting for frontend file to exist..."
Timeout /t 5
goto CheckForFrontend
:Exists
start /B python manage.py runserver


echo ""
echo "Server Built Successfully"
echo "Server running on 127.0.0.1:8000/"
start "" http://127.0.0.1:8000/
