# 🔗 Tiny URL Generator
A clean and simple URL shortener application built with Node.js, Express, and MongoDB. This project allows users to create short, manageable links from long URLs and tracks the number of times each link is accessed.

**Live Demo:** [https://short-url-generator-tau.vercel.app/](https://short-url-generator-tau.vercel.app/)

## 🤔 How It Works
The application follows a simple, effective logic:

- **URL Submission:** A user pastes a long URL into the input field and submits the form.
- **Short Link Generation:** The server receives the long URL. It uses the shortid library to generate a unique, random string.
- **Database Storage:** The original long URL, the newly generated short ID, and a default click count are saved as a new document in the MongoDB database.
- **Redirection:** When a user visits a short link (e.g., `B1-VfA5tM`), the server looks up the short ID in the database, finds the corresponding long URL, increments the click counter, and redirects the user to the original destination.

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Frontend:** EJS (Embedded JavaScript templates), Bootstrap
- **Deployment:** Vercel

## 📁 Project Structure
The project follows a standard MVC (Model-View-Controller) pattern to keep the code organized and maintainable.
```bash
/
├── models/
│   └── shortUrls.js    # Mongoose schema and model definition
├── views/
│   └── index.ejs       # The EJS template for the user interface
├── .gitignore          # Specifies files for Git to ignore
├── package.json        # Project metadata and dependencies
├── server.js           # Main application file (server setup, routes)
└── vercel.json         # Deployment configuration for Vercel

```

## 🚀 Local Installation

To run this project on your local machine, follow these steps:

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
2. **Install dependencies**
```bash
npm install
```
3. **Set up Environment VariablesCreate a file named .env in the root of your project and add your MongoDB connection string:**
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster...
```
4. **Run the development server**
```bash
npm run devStart
```
The application will be available at: `http://localhost:5000`

## ☁️ Deployment

This application is deployed on Vercel.
For the deployment to succeed:
- The MONGO_URI environment variable must be set in the Vercel project settings.
- The Vercel deployment IP must be whitelisted in MongoDB Atlas (0.0.0.0/0 for access from anywhere)
