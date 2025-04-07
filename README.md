# Flight Reservation System

This project is a RESTful API for a Flight Reservation System built using
Node.js, Express.js, and Sequelize ORM with a MySQL database. It allows users to
manage airplanes, cities, airports, and flights, including creating, retrieving,
updating, and deleting these resources.

## Features

- **Manage Airplanes:**
  - Create new airplanes with model numbers and capacities.
  - Retrieve a list of all airplanes.
  - Retrieve details of a specific airplane.
  - Update existing airplane information.
  - Delete airplanes.
- **Manage Cities:**
  - Create new cities.
  - Retrieve a list of all cities.
  - Retrieve details of a specific city.
  - Update existing city information.
  - Delete cities.
- **Manage Airports:**
  - Create new airports with names, codes, addresses, and associated cities.
  - Retrieve a list of all airports.
  - Retrieve details of a specific airport.
  - Update existing airport information.
  - Delete airports.
- **Manage Flights:**
  - Create new flights with flight numbers, airplane IDs, departure and arrival
    airport IDs, arrival and departure times, prices, boarding gates, and total
    seats.
  - Retrieve a list of all flights.
  - Filter flights based on departure and arrival airports.
- **Validation:**
  - Input validation for all create and update operations.
  - Checks for required fields and data types.
  - Ensures departure time is before arrival time for flights.
- **Error Handling:**
  - Robust error handling with custom error responses.
  - Specific error messages for validation failures, resource not found, and
    other issues.
- **Database:**
  - MySQL database for persistent data storage.
  - Sequelize ORM for database interactions.
  - Migrations for database schema management.
- **Logging:**
  - Winston for logging.

## Technologies Used

- **Node.js:** JavaScript runtime environment.
- **Express.js:** Web framework for Node.js.
- **Sequelize:** ORM for Node.js.
- **MySQL:** Relational database management system.
- **Winston:** Logging library.
- **dotenv:** For managing environment variables.
- **http-status-codes:** For HTTP status codes.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MySQL server
- NPM or Yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd airline-reservation-system
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Database Setup:**

    - Create a MySQL database.
    - Create a `.env` file in the root directory and add the following
      environment variables, replacing the placeholders with your actual
      database credentials:

      ```
      PORT=5000
      DB_NAME=your_database_name
      DB_USER=your_database_user
      DB_PASSWORD=your_database_password
      DB_HOST=localhost
      ```

4.  **Run Migrations:**

    ```bash
    npx sequelize-cli db:migrate
    ```

5.  **Run Seeders**
    ```bash
    npx sequelize-cli db:seed:all
    ```

### Running the Application

```bash
npm start
```
