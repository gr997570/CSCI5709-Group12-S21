# Tutorial/Lab
This an individual submission for tutorial 2. we will be developing a peer mentorship application. Currently we have created the angular project setup and deployed the application on heroku.

* Date Created: 23 05 2021
* Last Modification Date: 23 05 2021
* GITHUB URL: https://github.com/gr997570/CSCI5709-Group12-S21
* Heroku URL: https://tutorialsample.herokuapp.com/


## Authors
Our teams include below members.

* Divyansh Vyas dv435960@dal.ca - Collaborator 
* Mohammed Hamza Jasnak mh342039@dal.ca - Collaborator 
* Gurleen Kaur Saluja gr997570@dal.ca - Collaborator 
* Mansi Singh mn518448@dal.ca - Collaborator 
* Misbah Pathan ms358232@dal.ca  - Collaborator


## Getting Started

### Prerequisites

To have a local copy of this lab and running on your local machine, you will first need to install the following software / libraries / plug-ins

Angular CLI: 11.0.3
Node: 14.15.1
Express: 4.17.1
Angular:
...
Ivy Workspace:

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1100.3 (cli-only)
@angular-devkit/core         11.0.3 (cli-only)
@angular-devkit/schematics   11.0.3 (cli-only)
@schematics/angular          11.0.3 (cli-only)
@schematics/update           0.1100.3 (cli-only)


See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

1. Clone the repository
2. Open the project folder in command window
3. Run the npm install command
4. To run the application on local. run "npm start" or "ng serve -o" command.

## Deployment

Our code has been deployed on heroku and it is available at https://tutorialsample.herokuapp.com/

## Built With

* [Angular](https://angular.io/guide/setup-local) - The frontend framework
* [Node](https://nodejs.org/en/) - The backend framework 
* Express(https://www.npmjs.com/package/express) - To create REST API

## Sources Used

### server.js

Lines 1 - 8
---------------

```
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/CSCI5709-Group12-S21'));
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, '/dist/CSCI5709-Group12-S21/index.html'));
});
app.listen(process.env.PORT || 8080);
```	

The code above was created by adapting the code in [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147) as shown below: 

```
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<name-of-app>'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
```

- The code in [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147) was implemented by Olutunmbi Banto
- [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147)'s Code was used to refer how to deploy front end application on Heroku and also to understand the role of server.js file.
- [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147)'s Code was modified by Group12-S21.


### package.json

Lines 47 - 50
---------------

```
"engines": {
    "node": "14.16.1",
    "npm": "6.14.12"
}
```

The code above was created by adapting the code in [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147) as shown below: 

```
"engines": {
    "node": "6.11.0",
    "npm": "3.10.10"
}
```

- The code in [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147) was implemented by Olutunmbi Banto.
- [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147) Code was used because these versions of node and npm are used by Heroku to run the application on server.
- [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147) Code was modified by Group12-S21.
