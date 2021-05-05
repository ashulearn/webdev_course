# Social Media App

## DataBase setup

First we will setup the databse which we will use for the project 

```mysql
create database cbsocialmediadb;
```

## Project structure  
```shell
src
├───controllers         # functions to connect to db
├───db                  # db connection and model definition
├───public              #html/css files for the static part of website    
└───routes              #express middlewares(route wise)
```
## Bussiness Logic

### users:- 
1. **create user**
    this will create a new user with random username

### posts:-

1. **create posts**
    this will crate a new post required fields:
    -username
    -title
    -body

2. **show all posts**
    list all existing posts, we should have following filtering support
    -filter by username
    -filter by quality

3. **edit a post** (TBD)

4. **delete a post**(TBD)

### comments:-

1.  **show all comments(under a post)**
2.  **show all comments(by a user)**
3.  **add a comment**