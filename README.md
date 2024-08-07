# React Redux App

## Description
The React Redux App is a modern web application built using React, Redux Toolkit, and RTK Query. This app demonstrates state management and data fetching capabilities in a React environment.

## Features

- **Create Posts:** Users can create new posts with a user ID, title, and description.
- **Read Posts:** Users can view a list of all posts.
- **Update Posts:** Users can update existing posts with new information.
- **Delete Posts:** Users can delete posts.
- **Responsive Design:** The application is fully responsive and works on all device sizes.
- **Modal Forms:** Use of modal dialogs for creating and updating posts.
- **State Management:** Efficient state management with Redux Toolkit and RTK Query.

## Installation
** Clone the repository: **
   ```sh
   git clone https://github.com/shakhera/react-redux-app.git
   cd react-redux-app
   npm install
   npm run dev

## Usage
- Create a Post: Click the "Create Post" button and fill out the form in the modal.
- Update a Post: Click the "Update Post" button for a specific post to open the update form modal.
- Delete a Post: Click the "Delete Post" button to remove a post from the list.

## API Endpoints
- GET /posts: Retrieve all posts.
- GET /posts/{id}: Retrieve a specific post by ID.
 - POST /posts: Create a new post.
- PUT /posts/{id}: Update an existing post.
- DELETE /posts/{id}: Delete a post by ID.
