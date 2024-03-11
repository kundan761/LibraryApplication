# Personal Library API

This is a RESTful API for a personal library application. It allows users to categorize books with statuses (Currently Reading, Read, Want to Read), manage their library with CRUD operations, authenticate users, and use features like query parameters for dynamic pagination, filtering, sorting and search. It also integrates a Reviews model to allow for the creation, viewing, updating, and deletion of book reviews by authenticated users. Additionally, it includes an Add to Favorites feature to manage favorite books.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB

### Installing

1. Clone the repository: `git clone` <a href=https://github.com/kundan761/LibraryApplication.git> https://github.com/kundan761/LibraryApplication.git</a>
2. Install dependencies: `npm install`
3. Start the server: `npm run server`

## Features

- User registration and login
- CRUD operations for managing books and reviews
- Dynamic pagination for book listings
- Filtering of books based on book status
- Search feature to find books by title or author
- Reviews management
- Add to Favorites feature

## Built With

- Node.js - JavaScript runtime
- Express - Web application framework
- Mongoose - MongoDB object modeling tool
- bcryptjs - Password hashing
- jsonwebtoken - JSON Web Tokens for session management
- dotenv - Environment variable loader

## Authors

- Kundan Kumar Suraj

