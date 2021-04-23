# Social Media App

## Database setup
```mysql
create database socialmediadb
```
use the root user only for now
We will do the npm init and npm install 

## Project structure
 src :
     controller             #functions to connect routes to db operations
     db                     #db connections and model definitions
     public                 #html/css/js files for 
     routes                 #express middleware for routing

There are two ways to develop a project either a bottom up or top down
bottom-up : first we create the db and the api and on the basis of that we make the front end
top-down : first the front-end is made and then we make the db and api on the basis of the front-end requirement
we will use here bottom up approach