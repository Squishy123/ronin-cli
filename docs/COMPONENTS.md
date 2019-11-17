# Ronin Components
The different pieces of any back-end platform can be classified into different types of components.

Currently Ronin has support for 5 different components with an option for custom components.

# Models
Models are the schemas and functions that are binded to a specific database object.

As of now, Ronin currently only has support for Mongoose ORM Models, but there are plans for supporting many other ORM's in the future.

# Migrations
Migrations are functions that manipulate database objects between schema changes.  

# Modules
Modules are specific functions/plugins that the server runs at startup. They can be binded into middleware for additional functionality.

# Middlewares
Middlewares are functions that are chained together and executed in a route call. 

By default, ronin-starter comes with 2 middlware that are automatically binded to each route.

combinedParsed.js
- Combines the params, body and query into a single binded variable

sendPayload.js
- Automatically sends the req.payload at the end of each route

## Middleware Convention
The basic structure for any middleware is as follows:
```
function middleware(req, res) {
    return res.send("Hello World!");
}
```
2 Parameters: 
- req -> request object
- res -> result object

Additionally within the req object there are additional properties that allow data binding/flow within middleware chains

req
- params -> the combined parameters from body, params, query
- scope -> binded data that can be passed between different middleware
- payload -> the payload object that get's sent via res by the end of the chain

this -> The context of middleware is automatically binded to the routeloader
- this.binds -> Binded server modules and data

# Routes
Server routes are defined using the following convention: 

```
const Helloworld = {
    method: "GET",
    path: "/",
    enabled: true,
    handler: [(req, res) => {
        req.payload = { message: 'Hello World!', data: req.params};
    }]
}
```
Property | Description
- | -
method | HTTP Method (POST, GET, PUT, DELETE) 
path  | The URL string
enabled | boolean value for whether or not the route should be loaded
handler | Either an array of middleware functions or a single function

# 🚧 UNDER CONSTRUCTION 🚧
## More coming soon!