
# StoryBooks

StoryBooks is a web application that allows users to write and share their stories online. It provides a platform where writers can create, edit, and publish their stories, and readers can discover and enjoy a wide range of literary works.

This is created by following a Tutorial. 
https://youtu.be/SBvmnHTQIPY?si=8sDk-ujZTkyd0L6b





## Features

- User Authentication: Users can sign up, log in, and manage their accounts securely.
- Story Creation: Create new stories with a user-friendly editor.
- Story Management: Edit, delete, and organize your stories easily.
- Public and Private Stories: Choose whether to share your stories publicly or keep them private.
- Comments and Feedback: Readers can leave comments and feedback on stories.
- Responsive Design: Works seamlessly across devices of all sizes.


## Tech Stack

1. Frontend:

    - HTML
    - CSS (potentially with frameworks like Bootstrap or Tailwind CSS)
    - JavaScript (possibly with a framework like React, Vue.js, or Angular)
    - 

2. Backend:

    - Node.js
    - Express.js (as the web application framework)
    - MongoDB (as the database)

3. Authentication:

    - Passport.js (for authentication strategies)
    - OAuth 2.0 (for Google authentication)

## Installation

1. Clone this repository: ``` git clone https://github.com/ayowee/StoryBooks.git```
2. Navigate to the project directory: ```cd StoryBooks```
3. Install dependencies: ```npm install```
4. Set up environment variables:

    - Create a .env file in the root directory
    - Add the following variables:

```bash
    MONGO_URI=your_mongodb_uri
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
```

5. Start the development server: ```npm run dev```
6. Open ```http://localhost:3000``` in your browser.
    
## Usage

1. Sign up for an account or log in if you already have one.
2. Create a new story by clicking on the "Create Story" button.
3. Write your story using the editor.
4. Choose whether to publish your story publicly or keep it private.
5. Readers can discover your story on the platform and leave comments.


## Contributing

Contributions are welcome! If you'd like to contribute to StoryBooks, please follow these steps:

1. Fork the repository.
2. Create a new branch: ```git checkout -b feature/my-feature```
3. Make your changes and commit them: ```git commit -am 'Add some feature'```
4. Push to the branch: ```git push origin feature/my-feature``
5. Submit a pull request.

## Lessons Learned

The tutorial was released 3 years ago at the time I created this. In there he used some outdated ES5 JS snippets. I have to find new working code parts for where the problems occur. I commented most of problems that I found while coding this project.

