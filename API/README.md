# Gym Members API

## Description

The Gym Members API is a simple CRUD (Create, Read, Update, Delete) REST API built with Express.js. It manages a collection of gym members stored in memory, allowing clients to add, view, update, and delete member information. This API is organized in a modular structure, with clear separation of concerns among routes, controllers, services, and models.

## Features

- Create a new gym member
- Read member data (view all or a single member by ID)
- Update member data
- Delete a member by ID

## Technologies Used

- Node.js: JavaScript runtime
- Express.js: Web framework for Node.js

## Project Structure

```plaintext
project-root/
├── app.js                 # Main application entry point
├── routes/
│   └── members.js         # Route definitions for member endpoints
├── controllers/
│   └── memberController.js # Request handling for member endpoints
├── services/
│   └── memberService.js    # Business logic and data manipulation for members
└── models/
    └── memberModel.js      # In-memory data storage for members
```

## Prerequisites

- Node.js (v12 or higher)
- npm (Node package manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

Start the server with the following command:

```bash
node app.js
```

The server will start on `http://localhost:3000`.

## API Documentation

### Base URL

```
http://localhost:3000/members
```

### Endpoints

#### 1. Get All Members

- URL: `/members`
- Method: `GET`
- Description: Retrieve a list of all gym members.
- Response: JSON array of member objects.

  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "age": 30,
      "membershipType": "premium"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 25,
      "membershipType": "basic"
    }
  ]
  ```

#### 2. Get Member by ID

- URL: `/members/:id`
- Method: `GET`
- Description: Retrieve a single member by their unique ID.
- URL Parameter:
  - `id` (integer): The ID of the member to retrieve.
- Response: JSON object of the requested member, or a 404 error if not found.

#### 3. Create a New Member

- URL: `/members`
- Method: `POST`
- Description: Add a new member to the list.
- Request Body:
  - `name` (string): Name of the member.
  - `age` (integer): Age of the member.
  - `membershipType` (string): Membership type (e.g., "basic", "premium").
- Response: JSON object of the created member with a unique `id`.

  Example Request Body:
  ```json
  {
    "name": "Alice Brown",
    "age": 27,
    "membershipType": "premium"
  }
  ```

  Example Response:
  ```json
  {
    "id": 3,
    "name": "Alice Brown",
    "age": 27,
    "membershipType": "premium"
  }
  ```

#### 4. Update Member by ID

- URL: `/members/:id`
- Method: `PUT`
- Description: Update details of an existing member by ID.
- URL Parameter:
  - `id` (integer): The ID of the member to update.
- Request Body:
  - `name` (string): Name of the member (optional).
  - `age` (integer): Age of the member (optional).
  - `membershipType` (string): Membership type (optional).
- Response: JSON object of the updated member, or a 404 error if not found.

  Example Request Body:
  ```json
  {
    "age": 28
  }
  ```

#### 5. Delete Member by ID

- URL: `/members/:id`
- Method: `DELETE`
- Description: Delete a member from the list by ID.
- URL Parameter:
  - `id` (integer): The ID of the member to delete.
- Response: JSON object with a message confirming deletion, or a 404 error if not found.

  Example Response:
  ```json
  {
    "message": "Member deleted successfully",
    "deletedMember": {
      "id": 3,
      "name": "Alice Brown",
      "age": 27,
      "membershipType": "premium"
    }
  }
  ```

## Error Handling

The API returns error messages with appropriate HTTP status codes:

- 400 Bad Request: When required fields are missing or invalid.
- 404 Not Found: When a requested member ID does not exist.

## Example Usage with `curl`

- Get All Members:
  ```bash
  curl -X GET http://localhost:3000/members
  ```

- Get Member by ID:
  ```bash
  curl -X GET http://localhost:3000/members/1
  ```

- Create a New Member:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"name": "Alice Brown", "age": 27, "membershipType": "premium"}' http://localhost:3000/members
  ```

- Update a Member by ID:
  ```bash
  curl -X PUT -H "Content-Type: application/json" -d '{"age": 28}' http://localhost:3000/members/1
  ```

- Delete a Member by ID:
  ```bash
  curl -X DELETE http://localhost:3000/members/1
  ```

---