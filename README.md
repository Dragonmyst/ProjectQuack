# ProjectQuack
## About
The purpose of this app is to crowdsource data about how ducks are being fed around the world. Scientists will then use this data for analysis.

### Documentation
- [Requirements Gathering and Decisions](../ProjectQuack/Documents/requirements-gathering.md)
- [Technology Choices](../ProjectQuack/Documents/tech-stack.md)
- [Task List and Time Spent](../ProjectQuack/Documents/task-list.md)
- [Retrospective](../ProjectQuack/Documents/retrospective.md)

</br>

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
1. Run ```yarn install``` from within the api directory to install node packages
1. Run ```yarn start``` from within the client directory to serve the app 
1. Run ```yarn start``` from within the api directory to serve the function apis
1. App will be running on http://localhost:3000

#### MySQL Commands
- Start Server: $> ```brew services start mysql```
- Stop Server: $> ```brew services stop mysql```
- Connect to Server: $> ```mysql -u root -p```

#### Client Commands
- Install packages: .../client $> ```yarn install```
- Run project: .../client $> ```yarn start```
- Run tests: .../client $> ```yarn tests```