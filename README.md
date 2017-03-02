# WebTask

This project contains 2 main folder, server side and client side.

Setup the server-side
---------------------

This project used mongoDB to store the data and backend node JS 

MongoDb installation
install mongoDB version 3.2 or above from this website https://www.mongodb.com/download-center?jmp=docs&_ga=1.219085018.2110151812.1487386706#community


install Node Js from this website 
https://nodejs.org/en/download/

install version 6.9.5 or above

# Server Side Setup
         
         #database creation
Open the folder C:\Program Files\MongoDB\Server\3.2\bin click on mongod.exe it will start new cmd and it will print waiting for connections on port 27017

From the same folder open mongo.exe and type:  use webtask
it will create the database, you can then connect to the database by this url  mongodb://localhost:27017/webtask

       
       # Create Collection to the webtask database

Open the cmd and change directory to the folder webtask/server-side/database and type:  node dbGenerator.js 

# run the server-side 

open the cmd and change directory to /webtask/server-side
type: npm insall
then type : npm start
open http://localhost:3000/api/webtask/cars it will show all cars documents in the database


# Client Side

Open cmd and change the directory to /webtask/client-side 
 type: npm install 
 then type: npm start
 
 
 open the http://localhost/3001 and it will start the application


