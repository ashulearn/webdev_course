# Social Media App

## DataBase setup

First we will setup the databse which we will use for the project 

```mysql
create database cbsocialmediadb;
```

## Project structure 

### Backend (Server-Side) 
```shell
src
├───controllers         # functions to connect to db
├───db                  # db connection and model definition
├───public              # html/css files for the static part of website    
└───routes              # express middlewares(route wise)
```

### Front-end (Client side)

```
G:.
│   index.html                 # home page
│
├───app
│       common.js     # our own front-end code 
│
├───components
│       navbar.html            # our own code snippents
│
├───css
│       bootstrap.css          # css libraries we are using
│
└───js                         # js libraries we are using
        bootstrap.js
        jquery.js
        popper.js
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

## API Documentation

### `users`

1. `POST /api/users`
    Creates a new user with random name and id
2. `GET /api/users{id}`
    Get an user with given userId
3. `GET /api/users{username}`
    Get an user with given username

### `posts`

1. `GET /api/posts`
    Get al the posts by every one
2. `POST /api/posts`
    Creates new post 
    Required fields in the body are:-
    ```
    userId
    title
    body
    ``` 
