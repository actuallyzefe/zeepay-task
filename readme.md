# Part 1

<h1>1: What is TypeScript?</h1>

It's a programming language makes it easier for developers to write high-quality and scalable code.

<h1>2:What are the advantages of using TypeScript?</h1>

First of all it allows us a better structred code.

It allows us to prevent errors in development

<h1>3: What is a type in TypeScript?</h1>
A type is a way of defining the kind of data that a variable can hold or a function can receive as input or output.

<h1>4: What is the difference between interface and type in TypeScript?</h1>

Actually there is more than one difference

- Interfaces are often used for defining object shapes, while types can be used to define a wider range of data structures.

- Interfaces can define optional and read-only properties, while types cannot.

<h1>5: What is the use of the “any” data type in TypeScript?</h1>

The "any" value allows us flexibility.
We can use it temporarily for bypass the type checking for a value

# Part 2

<h1>1: What is an API?</h1>
In general, an API is a set of protocols, routines, and tools for building software applications. 
We can say an API is a "HOW THE DATA IS SERVED"

<h1>2:What is REST?<h1>
REST is a way to design web services that uses unique web addresses (URIs) to identify resources, and standard HTTP methods (like GET and POST) to interact with those resources.

<h1>3:What is the difference between GET and POST methods?</h1>

The difference on purposes are:
GET is used to retrieve data or resources from a server, while POST is used to submit or create new data on a server.

And the difference on parameters are:GET requests typically include parameters in the URL, while POST requests send parameters as part of the request body.

And there are some security and caching differences

<h1>4: What is a Microservice Architecture? </h1>
A microservice architecture is a way of designing software applications as a collection of small, independent services that work together to provide the overall functionality of the application.

<h1>5: What is the difference between authentication and authorization in API development?</h1>

Authentication is the process of verifying the identity of a user or client that is making a request to an API.

Authorization, on the other hand, is the process of determining what actions a user or client is allowed to perform on a specific resource or set of resources.

<h1>6: How would you implement token-based authentication in your API?</h1>

First of all I create an authentication endpoint that accepts user credentials

When a user logs in successfully, generate an access token and return it in the response to the client

I store the access token in a cookie

I define a token validity for each incoming req.
To check the token is valid or invalid

And a create a middleware to protect routes from unauthorized users
