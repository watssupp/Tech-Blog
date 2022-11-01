# Tech-Blog
## links


## Description
A mysql database built using Model View Controller (MVC) paradigm. Built using MySQL2, Express, Sequelize, Bulma, Handlebars and dotenv

## Usage 
- User can sign up
- Once signed up user can create post 
- Posts will have title and contents
- User will be able to leave comments on post
-  User will be able to update or delete their posts
- User will be automatically signed out of the site when user is idle for some period of time

## ScreenShots
![Alt](/public/img/Tech_blog%201.jpg)
![Alt](/public/img/Tech_blog%202.jpg)

## Istructions to run application
Create an .env file with the following 
```
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PW='xxx'
```
Open the terminal and install your dependencies with
```
npm i
```
run mysql in the terminal with 
```
mysql -u root -p
```
with in mysql you will input the follow steps
```
- source db/schema.sql;
- show databases;
- quit; 
```
Once your out of mysql in the terminal youll need to run the seeds with the next comand
```
npm run seed
```
Now your ready to run the appliaction in this final step
```
npm start
```
Have fun and enjoy!