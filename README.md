Welcome to the 4th dimension 0_0

	Tool Description:
		 We will be using Django to make a RESTful API backend service with React JS to handle the front end. We will accompany React with a Redux store to handle front end data management. This application will be hosted on an uWSGI online server with EngineX for management. uWSGI connects Django to EngineX. Django will connect to a MySQL database to hold all persisted data.

	Setup:
		- Backend: run python manage.py runserver
		- Front End:
			To build, enter the commands:
				1. npm build
				2. npm start
		- Testing:
			To run tests:
				1. npm test

	Organization:
		Requirments are located in the requiremnts sub directory
		FUTURE: React components are in the React sub directory
			- All components are located in the Componenets folder
			- Services are located in the Services folder
			- Utilities in the Util folder
			- Redux code is located in Redux folder
		All django code is located in the django folder

	Version Control:
		Make sure you have git installed on your device. Run the following commands on your terminal:
			- git status 
				(Should read fatal: no git repository)
			- git clone git@github.com:YOUR_NAME/4th_dimension.git
		Now you can checkout branches and commit your code!
