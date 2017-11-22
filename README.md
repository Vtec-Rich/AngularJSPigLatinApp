Simple Pig Latin Converter built in AngularJS
---------------------------------------------

A simple Angular application that converts any word into Pig Latin. Built to showcase SPA's with a focus on unit testing using Jasmine and Karma. Foundation is used to provide a grid framework.


** N.B. Please note all dependancies are required to be installed for the app to run **


Installation
------------
- you will need ruby, sass, NodeJS and npm installed on your system.
- Via a command prompt (run as admin) run the following command:

	npm install karma-cli phantomjs -g

- This is required for testing and allows the packages to be available via the command line
- Open a command prompt and navigate to the root folder of the app containing the 'package.json' file.
- run 'npm install' to install all dependancies.




How to open the app
-------------------

- Once all dependancies are installed simply double click the 'index.html' file in the app folder




CSS compilation
---------------

- To recompile the sass file into css you can use two commands:

	- in the command prompt type 'grunt sass' to perform a simple sass task to compile the sass into css and re-create the main.css file. 
	- in the command prompt type 'grunt watch' to watch the sass files and have the css re-compile when a change is made.




Tests
-----

- To run the tests from the root folder of the app run the following command:

	- karma start app/js/test/karma.conf.js

- This will start the tests; the command prompt will display a message regarding the results of these tests. Currently there are six tests; all of which can be found in the app/js/test/unit/AngularAppTests.js file.