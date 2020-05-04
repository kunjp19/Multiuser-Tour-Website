# Project Instruction
A React web app which allows users to schedule their tour visits to beaches of Goa for paddle boarding.

This Multi user Web App built using React and express framework which allows users to schedule their tours. It implements bcryptjs, a hashing algorithm for user authentication and Express-session for session implementation. Used libraries like NeDB, a javascript database to handle JSON data and Mocha test framework for testing the application during the development.


### To Launch this app one has to follow the below steps
1.Install Nodejs , Express , DevProxy , React <br/>
2.Install git<br/>
3.Clone this repository into local file system.<br/>
4.Now to run the below command from the tourserver directory to get the server running from command line.<br/>
5.Command : node serverRun.js<br/>
6.To launch the react app run this command form ReactTour directory from command line.<br/>
7.Command : node devProxy.js<br/>
8.Command : npm install -g parcel-bundler If warning like - Please, upgrade your dependencies to the actual version of core-      js@3 displays execute the command below.<br/>
9.Command : npm install --save core-js@^3 Now install the parcel-bundler after upgrade and run devproxy.<br/>
10.Now launch the app with Link: URL for React APP from chrome or firefox.<br/>

### Functionality
-Guest Users can visit home and about page,coming tours.<br/>
-To schedule a tour he/she can login with details from userTours.json file. Now this is customer role with this each user can   schedule of his own interest.<br/>
-Only Admin can add and delete the coming tours in the app via tour management.

# Test
Tests are written for login, tour management using chai assertions and mocha framework.

### To run the tests user can execute the below commands from tourServer directory.
Command : mocha test/tourTest.js<br/>
Command : mocha test/loginTest.js<br/>
Command : mocha test/addTourTest.js<br/>
Command : mocha test/deleteTest.js<br/>
Command : mocha test/getTourTest.js<br/>

=======
# AWS
Hosting : https://dev.d17l673sh63you.amplifyapp.com/

