# ProjectQuack
## About

### Documentation
- [Requirements Gathering](../ProjectQuack/Documents/requirements-gathering.md)
- [Technology Choices](../ProjectQuack/Documents/tech-stack.md)
- [Development Task List](../ProjectQuack/Documents/task-list.md)

</br>
---
## How to setup
### Tools Used
- [Node.js](https://nodejs.org/en/)
- [HomeBrew](https://brew.sh/)
- [MySQL](https://dev.mysql.com/)
- [yarn](https://yarnpkg.com/)

### Steps to Run Locally:
1. Start the MySQL server
1. Run the following to initialize the database: 
   %> ```bash MySQLSetupScript.sh```
1. Run ```yarn install``` from within the client directory to install node packages
1. Run ```yarn build``` to build the app into the build folder
1. Run ```npm install -g azure-functions-core-tools@3``` and ```npm install -g azure-functions-core-tools@3``` to install tools required for the api functions
1. Run ```sswa start ./client/build --api ./api``` from within in the root start the application using the azure cli tools.
2. App will be running on http://localhost:4280

#### MySQL Commands
- Start Server: $> ```brew services start mysql```
- Stop Server: $> ```brew services stop mysql```
- Connect to Server: $> ```mysql -u root -p```

#### Client Commands
- Install packages: .../client $> ```yarn install```
- Run project: .../client $> ```yarn start```
- Run tests: .../client $> ```yarn tests```