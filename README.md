# Spooky Travel Backend

Welcome to the Spooky Travel backend API! This project provides the backend functionality for a spooky travel website, including endpoints for tours and reviews.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Database Setup](#database-setup)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jmoncayo-pursuit/spooky-travel-backend.git

2. **Navigate to the project directory**

    ```bash
    cd spooky-travel-backend

3. **Install dependencies**

    ```bash
    npm install

## Configuration

Create a `.env` file in the root directory of the project and add your PostgreSQL database connection details:

```
PORT=4001
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=spooky_travel_dev
PG_USER=postgres
```

## Usage 

1. **Start the server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:4001`

2. **Database Setup:**

   Initialize the database schema and seed data using the following:
   ```bash
   npm run db:init
   npm run db:seed
   ```

## Endpoints

- `GET /`: Welcome message.
- `GET /bookmarks`: List all bookmarks.
- `POST /bookmarks`: Create a new bookmark.
- `GET /bookmarks/:id`: Get a specific bookmark.
- `PUT /bookmarks/:id`: Update a specific bookmark.
- `DELETE /bookmarks/:id`: Delete a specific bookmark.

Note: Adjust the endpoints section based on your actual routes.

## Database Setup

The database setup includes creating tables and seeding data. Make sure you have PostgreSQL installed and running. The `schema.sql` file contains the table definitions, and the `seed.sql` file populates the database with initial data.