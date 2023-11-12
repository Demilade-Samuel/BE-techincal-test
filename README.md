# A REST API SERVER for acronyms

This is a basic REST API server for managing acronyms. It supports CRUD operations (Create, Read, Update, Delete) for acronyms using a MongoDB Atlas database.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB Atlas account (for connecting to the database)

## Installation

1. Clone the repository:

   
   git clone https://github.com/Demilade-Samuel/BE-technical-test

2. Change to App directory:

    cd BE-technical-test
   
4. Install dependencies:

   npm install


## Configuration

1. Obtain your MongoDB Atlas connection string.

2. Replace the mongoURI variable in index.js with your connection string.


#Running the application

1. Start the server:

   node index.js

2. The server will start running on http://localhost:5000. You should see a message in the console: "Server is running on port 5000."


#Endpoints

GET /acronym: Get a list of acronyms.
POST /acronym: Add a new acronym.
PATCH /acronym/:acronymID: Update an existing acronym.
DELETE /acronym/:acronymID: Delete an existing acronym

#Route testing

Utilize an API client to test out these endpoints, postman etc etc




