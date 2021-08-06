# About the Technologies Used
## Technology Stack Used
- Frontend
  - React served using Azure Static Web App
- Backend
  - Serverless using Azure Functions
- Data Storage
  - MySQL
  
</br>

## High Level Component Diagram
![High Level Component Diagram](component-diagram.png)

</br>

## Database Model
![Database Model](database-model.png)

### Why React?
[React](https://reactjs.org/) is a Javascript library for building frontend web applications.

Features:
- Declarative: which makes it easy to create interactive UIs. This makes your code more predictable and easier to debug.
- Component-Based: which allows for the encapsulation of components to manage their own state. This allows the code to be simpiler and follow the single responsibility principles of design.
- Learn Once, Write Anywhere: It has the ability to be integrated into any technology stack along side existing code.

React is a very popular choice of javascript framework for frontend web application development. It has lots of community support, so there are a number of resources and libraries to learn and choose from. It is a very flexible framework that is easy to adapt and scale out. 

I have been using React for a few years now and felt comfortable using it for this project.

</br>

### Why Azure Static Web App with Azure Functions?
[Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/#overview) is a streamlined full-stak development from source code to global high availability.

Features:
- Global hosting: automated content geo-distribution.
- API Functions: integrated serverless APIs powered by Azure functions. Unlike tradition full back-end servers, the APIs are served from a single server along side the application.
- Streamlined CI/CD: Github integration where repo changes trigger builds and deployments.
- Seamless staging environments: Have staginging versions for previewing features before release.
- Seamless security model: it uses a reverse-procy to call APIs, thus no CORS configuration is required.

Since this is a farely simple application, I wanted somewhere quick to get up and running in the cloud. Azure Static Web Apps easily integrates with Github to create a pipeline with no effort. They come integrated with internal azure function capability. This allows the web application to have a quickly setup serverless api.

I have played around a bit with Azure Static Web Apps when they were still in preview phase. Found it was a good chose to quickly get the application up and running. Since there is not much backend work for this application, serverless is a good chose, rather then hosting a full backend somewhere. It will allow for scalability in the future too.

</br>

### Why MySQL?
[MySQL](https://www.mysql.com/) is a relational database management system based on SQL (structured query language). It supports a range of purposes, from data warehousing to e-commerce applications.

Features:
- Data security: it is globally renowned for being secure and reliable.
- On-demand scalability: can manage deeply embedded apps using a smaller footprint even in massive warehouses to stack terabytes of data. 
- High performance: it is designed to meet even the most demanding applications while ensuring optimum speed, full-text indexes and unique memory caches for enhanced performance.
- Comprehensive transcational support: complete atomic, consistend, isolated, durable transaction support (ACID), multi-version transaction support, and unrestriced row-level locking. 
- Flexibility of open source

Since this application is crowdsourcing it's data and the users would likely be out in a park. It makes sense that it would one day have a mobile component. MySQL is one of the more familiar choices that I know of for mobile development. 

It is also fairly easy to setup for local deployment whether you are on a Mac, PC or Linux machine. As well as, available to use in most cloud service providers or host your own on premise.

These reasons made it an good choice for this application.

</br>

### Why Microsoft Azure for Hosting?
I have not used Google Cloud, so I didn't want to spend a whole lot of time learning it. 

While I have used AWS, it has also been a couple years since I have been in it. So again I would need to learn not only how to deploy the application but the database and then integrate everything together. 

I use Microsoft Azure all the time at work and felt the most comfortable with the UI and features.