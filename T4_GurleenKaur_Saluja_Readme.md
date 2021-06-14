# Tutorial 4

* Date Created: 14 06 2021
* Last Modification Date: 14 06 2021
* Application URL: https://tutorialsample.herokuapp.com/
* GitHub URL: https://github.com/gr997570/CSCI5709-Group12-S21
* Specific URL: https://tutorialsample.herokuapp.com/tutorial4

## Authors

* Gurleen Kaur Saluja(gr997570@dal.ca) - Collaborator

## Getting Started

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

1. [Node v6.14.12](https://nodejs.org/en/)
2. [NPM v14.16.1](https://nodejs.org/en/)
3. [Angular CLI v11.0.3](https://angular.io/guide/setup-local) (Using CLI: npm install -g @angular/cli)
4. [Express v14.17.1](https://www.npmjs.com/package/express)  (Using CLI: npm install express)

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

A step by step series of examples that tell you how to get a development env running

1. Checkout the code from GitHub.
2. Open CLI on the source package which contains package.json and run npm install to install all the dependencies.	
3. Run npm start on local. The application should start at port 8080 which is configured in package.json file.

```
Example: The application will show the following content after deployment.

Part 1:

Tutorial 2 (link)		Tutorial 3 (link)		Tutorial 4 (link)

Login Form with Fields
Submit Button

Part 2:
All users fetched from API given in tutorial specification document.

Part 3:
Details of specific user accessed from part 2.
```

## Deployment

## Sources Used

The below sources were referred for this tutorial:

1. [Angular HTTP Client](https://angular.io/guide/http)

2. [Edupala - Angular Filter](https://edupala.com/how-to-implement-an-angular-search-filter-in-angular/)

3. [Angular Route Guard](https://angular.io/guide/router-tutorial-toh#milestone-5-route-guards)

### auth-service.service.ts
Lines 18 - 31
---------------

```
login(email: string, password: string) {
	let postData = {email: email, password: password};
	return this.http.post<LoginResponse>(this.apiEndpoint+'login', postData).pipe(
		catchError(this.handleError));
}

private handleError(error: HttpErrorResponse) {
	if (error.status === 0) {
		console.error('An error occurred:', error.error);
	}
	else {
		this.errorMessage = error.error.message;
	}
	return throwError(this.errorMessage);
}
```

The code above was created by adapting the code in [Angular HTTP Client](https://angular.io/guide/http) as shown below: 

```
addHero(hero: Hero): Observable<Hero> {
	return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
	.pipe(
		catchError(this.handleError('addHero', hero))
	);
}
```

- The code by [Angular HTTP Client](https://angular.io/guide/http) was implemented/shared by Angular IO.

- [Angular HTTP Client](https://angular.io/guide/http)'s code was used to refer how to use HTTP Client to send request and get a response.

- [Angular HTTP Client](https://angular.io/guide/http)'s code was modified by Gurleen Kaur Saluja.

### searchuser.pipe.ts
Lines 19 - 23
---------------

```
transform(list: any[], filterText: string): any {
	return list ? list.filter(item => (item.firstName+" "+item.lastName).search(new RegExp(filterText, 'i')) > -1) : [];
}
```

The code above was created by adapting the code in [Edupala - Angular Filter](https://edupala.com/how-to-implement-an-angular-search-filter-in-angular/) as shown below: 

```
transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  }
```

- The code by [Edupala - Angular Filter](https://edupala.com/how-to-implement-an-angular-search-filter-in-angular/) was implemented/shared by Edupala.

- [Edupala - Angular Filter](https://edupala.com/how-to-implement-an-angular-search-filter-in-angular/)'s code was used to refer how to create a custom filter for values which need to be filtered.

- [Edupala - Angular Filter](https://edupala.com/how-to-implement-an-angular-search-filter-in-angular/)'s code was modified by Gurleen Kaur Saluja.

### users.component.ts
Lines 34 - 36
---------------

```
search(value: any): void {
	this.searchUser = this.userProfiles.filter((val) => (val.firstName+" "+val.lastName).toLowerCase().includes(value));
}
```

The code above was created by adapting the code in [Edupala - Angular Filter](https://edupala.com/how-to-implement-an-angular-search-filter-in-angular/) as shown below: 

```
search(value: string): void {
	this.countries = this.allCountries.filter((val) => val.name.toLowerCase().includes(value));
}
```

- The code by [Edupala - Angular Filter](https://edupala.com/how-to-implement-an-angular-search-filter-in-angular/) was implemented/shared by Edupala.

- [Edupala - Angular Filter](https://edupala.com/how-to-implement-an-angular-search-filter-in-angular/)'s code was used to refer how to pass data for filtration to a pipe.

- [Edupala - Angular Filter](https://edupala.com/how-to-implement-an-angular-search-filter-in-angular/)'s code was modified by Gurleen Kaur Saluja.

### authguard.guard.ts
Lines 19 - 25
---------------

```
private checkLogin(url: string): true|UrlTree{
	if (this.authService.isLoggedIn) {
		return true;
	}
	this.authService.redirectUrl = url;
	return this.router.parseUrl('/tutorial4');
}
```

The code above was created by adapting the code in [Angular Route Guard](https://angular.io/guide/router-tutorial-toh#milestone-5-route-guards) as shown below: 

```
checkLogin(url: string): true|UrlTree {
	if (this.authService.isLoggedIn) { return true; }

	// Store the attempted URL for redirecting
	this.authService.redirectUrl = url;

	// Redirect to the login page
	return this.router.parseUrl('/login');
}
```

- The code by [Angular Route Guard](https://angular.io/guide/router-tutorial-toh#milestone-5-route-guards) was implemented/shared by Angular IO.

- [Angular Route Guard](https://angular.io/guide/router-tutorial-toh#milestone-5-route-guards)'s code was used to refer how to guard child routes from unauthorized access.

- [Angular Route Guard](https://angular.io/guide/router-tutorial-toh#milestone-5-route-guards)'s code was modified by Gurleen Kaur Saluja.