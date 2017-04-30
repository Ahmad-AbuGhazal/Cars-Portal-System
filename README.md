# Cars Infomation
This project aimed to provide cars detaits, the front end is react Js and the backend is Node Js, I used mongoDB as a database.
I was responsible to implement the whole project in one week, The project is divided into server side and client side. 

Setup the server-side
---------------------

This project used mongoDB to store the data and backend node JS 

# MongoDb installation
install mongoDB version 3.2 or above from this website https://www.mongodb.com/download-center?jmp=docs&_ga=1.219085018.2110151812.1487386706#community


# Node Js installation

install version 6.9.5 or above from this website
https://nodejs.org/en/download/


# Server Side Setup
         
   1- database creation
Open the folder C:\Program Files\MongoDB\Server\3.2\bin click on mongod.exe it will start new cmd and it will print waiting for connections on port 27017

From the same folder open mongo.exe and type:  use webtask
it will create the database, you can then connect to the database by this url  mongodb://localhost:27017/webtask

        
  2- Create Collection to the webtask database

Open the cmd and change directory to the folder webtask/server-side/database and type:

       # node dbGenerator.js 


# run the server-side 

Open the cmd and change directory to /webtask/server-side and type:
           
        # npm install
        # npm start


open http://localhost:3000/api/webtask/cars it will show all cars documents in the database


# Client Side

Open the cmd and change the directory to /webtask/client-side  and tyoe:
      
        # npm install
        # npm start
 
 open the http://localhost/3001 and it will start the application


