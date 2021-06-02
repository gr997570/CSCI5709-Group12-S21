# Tutorial 3

* Date Created: 31 05 2021
* Last Modification Date: 31 05 2021
* Application URL: https://tutorialsample.herokuapp.com/
* GitHub URL: https://github.com/gr997570/CSCI5709-Group12-S21

## Authors

* Gurleen Kaur Saluja(gr997570@dal.ca) - Collaborator / Maintainer

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

1. Checkout the code from GitHub.
2. Open CLI on the source package which contains package.json and run npm install to install all the dependencies.	
3. Run npm start on local. The application should start at port 8080 which is configured in package.json file.

```
Example: The application will show the following content after deployment.

Part 1:

Tutorial 2 (link)		Tutorial 3 (link)

Registration Form with Fields
Submit Button

Part 2:
Welcome message.
```

## Deployment

## Sources Used

The below sources were referred for this tutorial:

1. [Angular Routing] (https://angular.io/guide/router#getting-route-information)

2. [Nic Raboy] (https://www.thepolyglotdeveloper.com/2016/10/passing-complex-data-angular-2-router-nativescript/)

###tutorial3.component.ts
Lines 28 - 35
---------------

```
onSubmit() {
	let formFields: NavigationExtras = {
		queryParams: {
			"fname": this.loginForm.value.fname,
			"lname": this.loginForm.value.lname,
			"email": this.loginForm.value.email
		}
    }
    this.router.navigate(["/profile"], formFields);
}
```

The code above was created by adapting the code in [Nic Raboy] (https://www.thepolyglotdeveloper.com/2016/10/passing-complex-data-angular-2-router-nativescript/) as shown below: 

```
public onTap() {
	let navigationExtras: NavigationExtras = {
		queryParams: {
			"firstname": "Nic",
			"lastname": "Raboy"
		}
	};
	this.router.navigate(["page2"], navigationExtras);
}
```

- The code by [Nic Raboy] (https://www.thepolyglotdeveloper.com/2016/10/passing-complex-data-angular-2-router-nativescript/) was implemented/shared by Nic Raboy

- [Nic Raboy] (https://www.thepolyglotdeveloper.com/2016/10/passing-complex-data-angular-2-router-nativescript/)'s code was used to refer how data can be passed between routes.

- [Nic Raboy] (https://www.thepolyglotdeveloper.com/2016/10/passing-complex-data-angular-2-router-nativescript/)'s code was modified by Gurleen Kaur Saluja.

###profile.component.ts
Lines 19 - 23
---------------

```
this.route.queryParams.subscribe(params => {
	this.fname = params["fname"];
	this.lname = params["lname"];
	this.email = params["email"];
});
```

The code above was created by adapting the code in [Nic Raboy] (https://www.thepolyglotdeveloper.com/2016/10/passing-complex-data-angular-2-router-nativescript/) as shown below: 

```
this.route.queryParams.subscribe(params => {
	this.name = params['name'];
});
```

- The code by [Angular Routing] (https://angular.io/guide/router#getting-route-information) was implemented/shared by Angular.io

- [Angular Routing] (https://angular.io/guide/router#getting-route-information)'s code was used to refer how data passed between routes will be fetched in component.

- [Angular Routing] (https://angular.io/guide/router#getting-route-information)'s code was modified by Gurleen Kaur Saluja.
