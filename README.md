`src` -> Inside the source folder all the actual source code regarding the project will reside, this will not include any kind of tests.

Lets take a look inside the `src` folder

- `config` -> in this folder, anything or everything regarding any configuration or setup of a library or module will be done. For example: seeting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is down in the `server.config.js`. One more example can be to setup logging library that help you to prepare meaningful logs, so configuration for this library shoudl be done here.

- `routes` -> In this folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators, etc.

- `controllers` -> they are kind fo the last middleware as post them you call the business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns the output, we structure the API response in controllers and send the output.

- `repositories` -> this folder contains all the logic using which we interact with the Database by writing queries, all the raw queries or ORM queries will go here

- `services` -> contains the business logic and interacts with repositories for data from the database

- `utils` -> contains helper methods, error classes, etc.

Connect to mysql : sudo mysql -u root -p (enter) prompt for password

migrations put database level constraints, but model put Javascript level constraints
