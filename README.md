# Project Overview

This project consists of three main components: the client, server, and socket. Each component can be started independently using `npm start`.

## Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

## Setting Up MongoDB Cloud

To use MongoDB as your database, you'll need to create a MongoDB Cloud account and configure it for your project.

1. **Create a MongoDB Cloud Account:**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up for a free account.
   - Follow the prompts to set up your account.

2. **Create a Cluster:**
   - Once logged in, click on "Build a Cluster" and follow the instructions to create a new cluster.
   - Choose the free tier for development purposes.

3. **Configure Your Cluster:**
   - After the cluster is created, click on "Connect" and follow the instructions to allow access from your IP address.
   - Create a database user with a username and password.

4. **Get the Connection String:**
   - Copy the connection string provided by MongoDB Atlas. It will look something like this:
     ```
     mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
     ```
   - Replace `<username>`, `<password>`, and `<dbname>` with your database user credentials and desired database name.

5. **Update Your Project Configuration:**
   - In your server configuration file (e.g., `config.js` or `.env`), update the MongoDB connection string with the one you copied.

## Starting the Client

The client is built with React.js. To start the client:

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the client:
   ```bash
   npm start
   ```

The client will typically be available at `http://localhost:3000` in your web browser.

## Starting the Server

The server is built with Node.js. To start the server:

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

The server will typically run on `http://localhost:5000` or another specified port.

## Starting the Socket

The socket project is also built with Node.js. To start the socket:

1. Navigate to the `socket` directory:
   ```bash
   cd socket
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the socket:
   ```bash
   npm start
   ```

The socket server will typically run on a specified port, often `http://localhost:6000`.

## Additional Information

- Ensure all dependencies are installed before starting any component.
- If you encounter any issues, check the respective component's logs for more details.
