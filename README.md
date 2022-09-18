# Welcome to my Pull Requests App
This is a typescript MERN stack project.

# How to start the project
Clone this repo\enter root after unzip and run `docker compose up --build -d`.  

# How to interact with the api
1. With Postman (or equivalent tool) send `POST` requests to `http://localhost:3080/prs`, an example payload is as follows:  
```json
    "serial": 1,
    "title": "my pull request",
    "description": "This pull request is awesome",
    "author": "Ben Lahav",
    "status": "draft",
    "labels": [
        "bugfix",
        "release20"
    ]
``` 
2. The front would render `GET` every refresh ith `useEffect` react hook.

# If I had more time what would I add (not by order of importance)
1. More documentation, specially at the frontend
2. More types and type annotations
3. Tests!
4. Create PR from GUI just for showoff (not asked for)
5. Create swaggerUI interface instead of Postman
6. Be more accurate about services docker build (Transpilation and Compilation)
7. Examine Websocket as a solution for server rendering new data of other api and acknowledge the frontend (or `setTimeout` of `useEffect` for once in sometime)

* **Important Note** - The frontend renders mock data if the backend didn't receive more than 2 PR create requests, just to make stuff look interactive.
