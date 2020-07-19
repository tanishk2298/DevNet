# DevNet 🌎

> Social network for Developers
> This is a MERN stack application, a social network website for developers, where developers can create their profiles and share their ideas.

### Features 🔐:

- Login/Sign-up
- Create/Update Profile
- Fetch users' github repositories and display it on their profile
- Create/Delete Post
- Like/Comment on posts
- Fetch users' profile image with Gravatar
- View other developer's profile

### Technologies 💻:

- ReactJS
- NodeJS
- ExpressJS
- MongoDB
- HTML
- CSS
- Bootstrap

### Live at :

[DevNet](https://intense-ridge-82512.herokuapp.com/)

# Quick Start 🚀

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

After running a build in the client 👆, cd into the root of the project.  
And run...

```bash
NODE_ENV=production node server.js
```

Check in browser on [http://localhost:5000/](http://localhost:5000/)

