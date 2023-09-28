
# Mern Todo App
A MERN-based todo app with user authentication and authorization for secure task management and user-specific access control.

## Things To Know
Change MONGODBURI in ./server env file to your own MongoDB account.
In deployed frontend signup may respond slow for the first time because of Render service.

## DEMO ACCOUNT
Email Address : tiwari@gmail.com
Password : powerpoint

## Demo

https://github.com/HarshTiwari-err/TODO_MERN_APP/assets/129328042/383921b3-0aba-4df3-be20-3a4805d90f03



## Screenshots

#### Authentication Flow 
![JWTAUTH](https://github.com/HarshTiwari-err/TODO_MERN_APP/assets/129328042/0a1e16e0-45e5-479e-8e3d-da01511bb635)


#### MiddleWare Authorization
![Auth Middleware](https://github.com/HarshTiwari-err/TODO_MERN_APP/assets/129328042/4b960d4c-a19a-4dff-b636-343173c3bc5d)


#### Signup Page
![Sign Up](https://github.com/HarshTiwari-err/TODO_MERN_APP/assets/129328042/db78dd09-80f9-420a-bcef-5b2bfee15b31)

#### LogIn Page
![Log In](https://github.com/HarshTiwari-err/TODO_MERN_APP/assets/129328042/90533a8b-406f-46e3-8121-cdf0339b1627)

#### Landing Page
![Landing Page](https://github.com/HarshTiwari-err/TODO_MERN_APP/assets/129328042/0ab78fa0-2db0-4447-869c-f64293409f86)

#### Logout
![Logged Out](https://github.com/HarshTiwari-err/TODO_MERN_APP/assets/129328042/3f2dc5c8-8e87-4123-92e3-b23fb5d6213e)


## Run Locally

Clone the project

```bash
  git clone https://github.com/HarshTiwari-err/TODO_MERN_APP.git
```

Go to the project directory

```bash
  cd TODO_MERN_APP

```
### Server directory
```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
### Client directory
```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```



## API Reference

You can use TODOAPI.postman_collection.json and import into postman to run the API in postman.



### UserAPI

| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /user/signup | To sign up a new user account |
| POST | /user/login | To login an existing user account |

### TodoAPI

| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /todo/createtodo | To create new todo |
| GET | /todo/gettodos | To get all todos of user |
| GET | /todo/gettodo/:todoid | To get todo by id |
| PUT | /todo/editTodo/:todoid | To edit todo by id |
| DELETE | /deletetodo/:todoid | To delete todo by id |
| POST | /createtask/:todoid | To create task for given todoid |
| GET | /gettasks/:todoid | To get tasks for todoid |
| DELETE | /deletetask/:todoid | To delete tasks for todoid |
| GET | /sortTodo | To Sort todo based on Time |


## FAQ

#### Have You Provided default MONGODB_URL?
Yes I have Provided my MONGODB_URL in .env file, you can change it to your URL too.

#### Do I need to change PORT?

There is no need to Change the PORT. Backend will run on Port 4000 and frontend will be on 3000 Port.

#### Did I implemented AUTH? 
Yes I did implement the auth by using JWT Authentication technique and as for protected route I made auth.js middleware.
## Deployment

 - [Frontend Deployed](https://frontendtodo-6s87.onrender.com/)
 - [Backend Deployed](https://backendtodoservice.onrender.com/)
#### First Signup and Login Request may take some time because of Render platform

## Lessons Learned

#### What did you learn while building this project?

While building this MERN todo app with authentication and authorization, I learned valuable skills in frontend and backend development, user authentication, and access control. I gained experience in creating secure and scalable web applications and deploying the application.

