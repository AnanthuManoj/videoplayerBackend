//import json-server library in index.js 
const jsonServer = require('json-server')//used to import the json-sever

//create server using this library

const mediaPlayerServer = jsonServer.create()


// create a path to data.json
const router = jsonServer.router('data.json')

//middleware to covert

const middleware = jsonServer.defaults()


//connect

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//server run on port 3000 on default so we need to setup a port for sever

const port = 5000 || process.env.PORT//this is applicable when we host our website to a server in order to avoid a clash

// monitor the port
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer is listening to ${port} and waiting for the request`);
})