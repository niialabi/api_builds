# Product Management API

AKA: CatalogCraft

A RESTful API built with Node.js, Express, and MySQL for managing product information.

## Project Setup

### Prerequisites

- Node.js (v14 or later)
- Docker

### Installation

1. Clone the repository:
git clone [your-repo-url]
cd [your-repo-name]
2. Install dependencies:
npm install
3. Set up the MySQL database using Docker:
docker run --name mqsqlDb -d -p 3306:3306 --rm -v mysqldata:/var/lib/mysql -e MYSQL_ROOT_PASSWORD='test' mysql:latest
4. Create a `.env` file in the project root and add your database configuration:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=test
DB_NAME=your_database_name
## Running the Application

- For development:
npm run dev

- For production:
npm start

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Retrieve all products |
| GET | /:id | Retrieve a specific product |
| POST | /create | Create a new product |
| PUT | /:id | Update an existing product |
| DELETE | /delete/:id | Delete a product |

## Request & Response Examples

### GET /

Response body:
```json
[
{
  "id": 1,
  "name": "Product 1",
  "description": "Description 1",
  "price": 19.99
},
{
  "id": 2,
  "name": "Product 2",
  "description": "Description 2",
  "price": 29.99
}
]

POST /create
Request body:
{
  "name": "New Product",
  "description": "Product description",
  "price": 39.99
}

Response body:
{
  "id": 3,
  "name": "New Product",
  "description": "Product description",
  "price": 39.99
}

Error Handling
The API uses standard HTTP status codes to indicate the success or failure of requests. In case of errors, a JSON response with an error message will be returned.
Technologies Used

Node.js
Express.js
MySQL
Docker
