# Tutorial 2

* Date Created: 23 05 2021
* Last Modification Date: 23 05 2021
* Application URL: https://tutorialsample.herokuapp.com/
* GitHub URL: https://github.com/gr997570/CSCI5709-Group12-S21

## Authors

* Gurleen Kaur Saluja(gr997570@dal.ca) - Collaborator / Maintainer
* Divyansh Vyas(dv435960@dal.ca) - Collaborator / Maintainer
* Mansi Singh(mn518448@dal.ca) - Collaborator / Maintainer
* Misbah Pathan(ms358232@dal.ca) - Collaborator / Maintainer
* Mohammad Hamza Jasnak(mh342039@dal.ca) - Collaborator / Maintainer

## Getting Started

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

1. Node v6.14.12 (https://nodejs.org/en/)
2. NPM v14.16.1 (https://nodejs.org/en/)
3. Angular CLI v11.0.3 (Using CLI: npm install -g @angular/cli) (https://angular.io/guide/setup-local)
4. Express v14.17.1 (Using CLI: npm install express)(https://www.npmjs.com/package/express)

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be, assume the marker just acquired a computer

1. Checkout the code from GitHub.
2. Open CLI on the source package which contains package.json and run npm install to install all the dependencies.	
3. Run npm start on local. The application should start at port 8080 which is configured in package.json file.

```
Example: The application will show the following content after deployment.

CSCI5709 Group12: the application is running!

Group Members
Mohammed Hamza Jasnak
Gurleen Kaur Saluja
Mansi Singh
Misbah Pathan
Divyansh Vyas

```

## Deployment

## Sources Used

The below source was referred to deploy our application on Heroku:

1. Tutorial 2 Live lecture:
(https://ca-lti.bbcollab.com/collab/ui/session/playback/load/dd30a701756b4a5e91b3dcbe2ddb2417)

2. How to Deploy Angular Application to Heroku
https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147

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