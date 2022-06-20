# crestera

`host_test_2` branch is pipelined to https://crestera.herokuapp.com on push. 

## UI designs

You can find the elavant Figma design for the frontend [[here](https://www.figma.com/file/If9jAQGyX4nradGAhHT2Wz/Crestera?node-id=0%3A1)].
## Branching convension

`main` branch will be used to deploy production releases.

 use Individual branches to do your own coding.
## Technology (Tech Stack)

1. NodeJS express sever.
1. MongoDB.
1. React.
1. socket.io.
1. Sass.

## Folder/file structure

Follow the current naming convention and folder structure.

```
Crestera
├── server                               //Backend
|       ├── client                       // Frontend
|       |      ├── public                // Public folder
|       |      ├── src                   // Add all the source files here
|      	|      |    ├── assets           // Assets folder
| 	|      |    ├── components       // Components folder. Add all sub components here
| 	|      |    ├── constants        // Add Constant files here
|       |      |    ├── context          // Add files related to Context API here.
|	|      |    ├── pages            // Main pages folder such as About Page, Landing Page etc.
| 	|      |    ├── services         // Services folder
|	|      |    ├── App.js           // App.js
| 	|      |    └── index.js         // index.js file. Add context providers here to wrap the whole app
|       |      ├── .gitignore            // Gitignore file
|       |      └── package.json          // node module dependencies
|       ├── controllers                  // Add all controller for models here
|       ├── models                       // Add all the mongoose models here
|       ├── routes                       // Add all the routes and sub routes here
|       ├── utils                        // Add all the services here
│       |   └── middlewares              // Add middlewares here for tasks
|       ├── index.js                     // Entry file
|       ├── nodemon.json                 // Update parellel with ecosystem.config.js but only the dev variables goes here
|       ├── package.json                 // node module dependencies
|       └── readme.md                    // README file
└── readme.md                            // README file
``` 

## Development

Follow the follwing steps to begin development.

1. Clone this repository.
1. cd server. 
1. cd client.
1. Run `npm install`.
1. Test locally using `npm start` command. //start Frontend 
1. cd server. 
1. Run `npm install`.
1. Test locally using `npm run dev` command. //start Backend 

note 
if you haven't install globally install it 
`npm i nodemon`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
