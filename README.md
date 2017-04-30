# Car Portal System
This project aimed to provide system to view the car information, The frontend is React Js and The backend is Node Js, I used mongoDB to store the data. I was responsible to implement the whole project in one week.


Setup the server-side:

1- Node Js installation:
install version 6.9.5 or above from this website
https://nodejs.org/en/download/

2- MongoDb installation
install mongoDB version 3.2 or above from this website https://www.mongodb.com/download-center?jmp=docs&_ga=1.219085018.2110151812.1487386706#community
#Server Side Setup
         
3- Database creation:
Open the folder C:\Program Files\MongoDB\Server\3.2\bin click on mongod.exe it will start new cmd and it will print waiting for connections on port 27017, From the same folder open mongo.exe and type:  Use webtask
it will create the database, you can then connect to the database by this url  mongodb://localhost:27017/webtask

        
4- Create Collection to the webtask database:

Open the cmd and change directory to the folder webtask/server-side/database and type:

       # node dbGenerator.js 


Run the server-side :

Open the cmd and change directory to /webtask/server-side and type:
           
        # npm install
        # npm start


open http://localhost:3000/api/webtask/cars it will show all cars documents in the database


Run the client Side

Open the cmd and change the directory to /webtask/client-side  and tyoe:
      
        # npm install
        # npm start
 
 open the http://localhost/3001 and it will start the application


