
# MyWay - Gallery Project

![Logo](https://i.imgur.com/KejfKMV.png)





# Screenshots
/pictures/list


## Features
- Create/Read/Update/Delete User
- Create/Read/Update/Delete Admin
- Create/Read/Update/Delete Picture
- Comment Picture
- Likes Picture
- Search Picture
- List of Liked Pictures
- Alerts


## Endpoints

| Endpoint            | Method | Auth                       |Description                |
| :------------------ | :------| :------------------------|:------------------------- |
|  /coments/add/:id   | `POST` | **User**                      |Add comment to picture |
| /likes/list         | `GET`  | **User**                      |Show user likes pictures |
| /likes/add          | `POST` | **User**                      |Add picture to likes pictures |
| /likes/delete       | `POST` | **User**                      |Delete picture from likes pictures |
| /pictures/list      | `GET`  | **Everyone**                  |Show all pictures |
| /pictures/info/:id  | `GET`  | **Everyone**                  |Show info about picture |
| /pictures/search    | `GET`  | **Everyone**                  |Search picture by title |
| /pictures/list/edit | `GET`  | **SuperUser**                 |Show list of pictures with edit option  |
| /pictures/edit/:id  | `GET`  | **SuperUser**                 |Show edit picture form  |
| /pictures/edit/:id  | `POST` | **SuperUser**                 |Update picture by id |
| /pictures/delete/:id| `POST` | **SuperUser**                 |Delete picture by id |
| /pictures/add       | `GET`  | **SuperUser**                 |Show add picture form  |
| /pictures/add       | `POST` | **SuperUser**                 |Add new picture |
| /users/list         | `GET`  | **SuperUser**                 |Show list of users with edit option|
| /users/edit/:id     | `GET`  | **SuperUser**                 |Show edit user form  |
| /users/edit/:id     | `POST` | **SuperUser**                 |Update user by id  |
| /users/delete       | `POST` | **SuperUser**                 |Delete user by id  |
| /users/add          | `GET`  | **Not logged in or SuperUser**|Show register form  |
| /users/add          | `POST` | **Not logged in or SuperUser**|Register/add new user |
| /users/addsuper     | `GET`  | **SuperUser**                 |Show register SuperUser form  |
| /users/addsuper     | `POST` | **SuperUser**                 |Register/add new SuperUser  |
| /users/login        | `GET`  | **Not logged in**             |Show login form  |
| /users/login        | `POST` | **Not logged in**             |Login user  |
| /users/logout       | `GET`  | **Logged in**                 |Logut user  |

## Tech Stack
- Node
- Express
## Dependencies
- "bcryptjs": "^2.4.3",
- "connect-flash": "^0.1.1",
- "cookie-parser": "^1.4.6",
- "cookie-storage": "^6.1.0",
- "express": "^4.18.2",
- "express-handlebars": "^6.0.7",
- "handlebars-dateformat": "^1.1.3",
- "hbs": "^4.2.0",
- "jsonwebtoken": "^9.0.0",
- "mongodb": "^4.13.0",
- "mongoose": "^6.9.0",




## Author

- [@Oskar Wal](https://github.com/Ozi17)

