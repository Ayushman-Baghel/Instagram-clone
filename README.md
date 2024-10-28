
# Instagram-clone

Instagram-clone is a social media platform application that replicates core functionalities of Instagram, including user authentication, post creation, commenting, and messaging. This project was developed using the MERN stack (MongoDB, Express, React, Node.js).

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Ayushman-Baghel/Instagram-clone.git
   cd Instagram-clone
   ```

2. **Install Dependencies:**
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Environment Variables:**
   Configure the environment variables in a `.env` file in the backend directory. Required variables:
   - `MONGODB_URI`: MongoDB connection string
   - `JWT_SECRET`: Secret key for JSON Web Token
   - `PORT`: Port on which the server will run

4. **Run the Application:**
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm start
     ```

## Features

- **User Authentication**: Signup and login with secure JWT-based authentication.
- **Posts**: Create, delete, and view posts.
- **Comments**: Comment on posts.
- **Messaging**: Send and receive messages with other users in real-time.

## Project Structure

```plaintext
instaclone-main/
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── index.js
├── frontend/
│   ├── public/
│   └── src/
├── package.json
└── README.md
```

## Usage

1. Visit `http://localhost:3000` in your browser after running the servers.
2. Create an account or log in with an existing one.
3. Explore features like posting images, commenting, and messaging other users.

## Technologies

- **Frontend**: React, CSS, HTML
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)

## Contributing

Feel free to fork this project, create new features, or report issues. Contributions are welcome!

## License

This project is licensed under the MIT License.
