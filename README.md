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
1. Run ```yarn install``` from within the client directory

#### MySQL Commands
- Start Server: $> ```brew services start mysql```
- Stop Server: $> ```brew services stop mysql```
- Connect to Server: $> ```mysql -u root -p```

#### Client Commands
- Install packages: .../client $> ```yarn install```
- Run project: .../client $> ```yarn start```
- Run tests: .../client $> ```yarn tests```