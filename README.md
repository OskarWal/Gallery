
# MyWay - Gallery Project

![Logo](https://i.imgur.com/KejfKMV.png)





# Screenshots
Pictures list
![Alt text](screenshots/pictures_list.PNG?raw=true "Title")

Picture Info 
![Alt text](screenshots/picture_info.PNG?raw=true "Title")

Picture Comments
![Alt text](screenshots/comments.PNG?raw=true "Title")

Register Form
![Alt text](screenshots/register_form.PNG?raw=true "Title")

Register Alert
![Alt text](screenshots/register_alert.PNG?raw=true "Title")

Login Form
![Alt text](screenshots/login_form.PNG?raw=true "Title")

Login Alert
![Alt text](screenshots/loggedin.PNG?raw=true "Title")

Likes Picture + User dashboard
![Alt text](screenshots/likes_pictures.PNG?raw=true "Title")

Search
![Alt text](screenshots/search.PNG?raw=true "Title")

Logout
![Alt text](screenshots/logout.PNG?raw=true "Title")

Logout alert
![Alt text](screenshots/logout_alert.PNG?raw=true "Title")

Register SuperUser Form
![Alt text](screenshots/createadmin.PNG?raw=true "Title")

Admin dashboard
![Alt text](screenshots/adminfuncions.PNG?raw=true "Title")

Add picture
![Alt text](screenshots/addphoto.PNG?raw=true "Title")

Add picture alert
![Alt text](screenshots/add_photo_alert.PNG?raw=true "Title")

Edit picture list
![Alt text](screenshots/edit_list.PNG?raw=true "Title")

Edit picture form
![Alt text](screenshots/edit_picture.PNG?raw=true "Title")

Edit picture alert
![Alt text](screenshots/alert_edit.PNG?raw=true "Title")

Users list
![Alt text](screenshots/user_list.PNG?raw=true "Title")

Delete user
![Alt text](screenshots/delete_user_alert.PNG?raw=true "Title")

Edit user
![Alt text](screenshots/edit_user.PNG?raw=true "Title")

Edit user
![Alt text](screenshots/edit_user_alert.PNG?raw=true "Title")




## Features
- Create/Read/Update/Delete User
- Create/Read/Update/Delete Admin
- Create/Read/Update/Delete Picture
- Comment Picture
- Likes Picture
- Search Picture
- List of Liked Pictures
- Alerts after all operation (add/edit/delete/search/login/logout/comment/like)


## Endpoints

| Endpoint            | Method | Auth                          |Description                        |
| :------------------ | :------| :-----------------------------|:-------------------------         |
|  /coments/add/:id   | `POST` | **User**                      |Add comment to picture             |
| /likes/list         | `GET`  | **User**                      |Show user likes pictures           |
| /likes/add          | `POST` | **User**                      |Add picture to likes pictures      |
| /likes/delete       | `POST` | **User**                      |Delete picture from likes pictures |
| /pictures/list      | `GET`  | **Everyone**                  |Show all pictures                  |
| /pictures/info/:id  | `GET`  | **Everyone**                  |Show info about picture            |
| /pictures/search    | `GET`  | **Everyone**                  |Search picture by title            |
| /pictures/list/edit | `GET`  | **SuperUser**                 |Show list of pictures with edit option  |
| /pictures/edit/:id  | `GET`  | **SuperUser**                 |Show edit picture form             |
| /pictures/edit/:id  | `POST` | **SuperUser**                 |Update picture by id               |
| /pictures/delete/:id| `POST` | **SuperUser**                 |Delete picture by id               |
| /pictures/add       | `GET`  | **SuperUser**                 |Show add picture form              |
| /pictures/add       | `POST` | **SuperUser**                 |Add new picture                    |
| /users/list         | `GET`  | **SuperUser**                 |Show list of users with edit option|
| /users/edit/:id     | `GET`  | **SuperUser**                 |Show edit user form                |
| /users/edit/:id     | `POST` | **SuperUser**                 |Update user by id                  |
| /users/delete       | `POST` | **SuperUser**                 |Delete user by id                  |
| /users/add          | `GET`  | **Not logged in or SuperUser**|Show register form                 |
| /users/add          | `POST` | **Not logged in or SuperUser**|Register/add new user              |
| /users/addsuper     | `GET`  | **SuperUser**                 |Show register SuperUser form       |
| /users/addsuper     | `POST` | **SuperUser**                 |Register/add new SuperUser         |
| /users/login        | `GET`  | **Not logged in**             |Show login form                    |
| /users/login        | `POST` | **Not logged in**             |Login user                         |
| /users/logout       | `GET`  | **Logged in**                 |Logut user                         |

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

