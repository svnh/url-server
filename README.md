# Url-Server
> A simple [Express.js] and [Angular.js] app that serves JSON data

ToC
1. [Scripts]
1. [Development]
  1. [Setup]
1. [Structure]

### Scripts

Command | Description
--- | ---
`npm start` | Configure and start the server.

### Development

#### Setup
1. Install node dependencies: run `npm install`
1. Install front-end dependencies: run `cd public && bower install`
1. Start the application `npm start` and visit localhost:3000 to see the application running

### Structure
```
url-server
├── README.md
├── data
│   └── urls.json
├── package.json
├── public
│   ├── app.js
│   ├── bower.json
│   ├── directives
│   │   └── urlDirective.js
│   ├── index.html
│   ├── partials
│   │   └── urls.html
│   └── services
│       └── urlService.js
└── server.js
```

#### Server
The server is an Express.js application that servers static files. `server.js` is essentially the main file of the entire application, which contains server configuration and routing.

##### Routes
Route | Description
--- | ---
`GET /` | Load UI via public/index.html
`GET /urls` | Retreive JSON for all URLs
`GET /urls/delete` | (TODO) Delete a URL
`GET /urls/create` | (TODO) Create a new URL
`GET /urls/update` | (TODO) Update a URL

#### Client
An Angular.js front-end composed of a basic directive to list data, which uses the Angular [`$resource`] for RESTful interaction with the server.

<!-- Links -->
[Express.js]: #expressjs.com
[Angular.js]: #angularjs.org
[Scripts]: #scripts
[Development]: #development
[Setup]: #setup
[Structure]: #structure
[`$resource`]: #https://docs.angularjs.org/api/ngResource/service/$resource
