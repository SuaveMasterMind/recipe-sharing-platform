# Recipe Sharing Platform

## Project Overview

The Recipe Sharing Platform is a web application where users can share, discover, and manage recipes. Users can contribute their own recipes, explore recipes from others, and interact with the community through ratings and reviews.

## Tech Stack

- **Frontend**: React, HTML, CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Setup Instructions

### Prerequisites

Before setting up the project, make sure you have the following installed:

- **Node.js** (https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** (either locally or using MongoDB Atlas)

### Installation

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:

    ```bash
    git clone https://github.com/SuaveMasterMind/recipe-sharing-platform.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd recipe-sharing-platform/backend
    ```

3. Install the backend dependencies:

    ```bash
    npm install
    ```

4. Set up the MongoDB connection in the `.env` file:

    Create a `.env` file in the `backend` directory and add your MongoDB connection string (from MongoDB Atlas or a local instance):

    ```text
    MONGODB_URI=your_mongodb_connection_string_here
    ```

5. Start the backend server:

    ```bash
    npm start
    ```

6. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

7. Install the frontend dependencies:

    ```bash
    npm install
    ```

8. Start the frontend:

    ```bash
    npm start
    ```

The application should now be running locally at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Features

- **User Registration**: Sign up and create a profile to manage your recipes.
- **Recipe Management**: Add, update, and delete your recipes.
- **Recipe Exploration**: Search and filter through the available recipes.
- **Ratings & Reviews**: Rate and leave reviews for recipes shared by other users.
  
## Deployment

You can deploy the application using services like **Heroku** or **Vercel**.

1. **Backend Deployment**:

   To deploy the backend on Heroku, run the following commands:

    ```bash
    heroku create
    git push heroku master
    ```

2. **Frontend Deployment**:

   To deploy the frontend on Vercel:

    ```bash
    vercel
    ```

Follow the prompts to deploy your application.

## Contribution

Feel free to fork the repository, create a branch, and make a pull request with your changes. We welcome contributions to improve the platform!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
