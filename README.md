# Movie Portal

<div align="center">
  <img src="https://i.ibb.co.com/X4Bfs21/uuuu.jpg" />
</div>

## Overview 

A full-stack movie portal website where users can explore movies, read details, and manage their watchlist. Built with modern web technologies including React, Node.js, Express, and MongoDB.



## Technologies Used 

### Frontend
- React.js
- Tailwind CSS
- JavaScript (ES6+)
- Lucide React (for icons)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Features 

- 🎬 Browse movies with dynamic filtering
- 🔍 Advanced search functionality
- 👤 User authentication and profiles
- 📱 Responsive design for all devices
- 💾 Watchlist management
- 🌙 Dark/Light mode toggle

## Dependencies 

### Frontend Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "tailwindcss": "^3.4.1",
  "lucide-react": "^0.344.0"
}
```

### Backend Dependencies
```json
{
  "express": "^4.18.2",
  "mongoose": "^8.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1"
}
```

## Running Locally 

### Frontend Setup 

```bash
# Clone the repository
git clone <repository-url>

# Navigate to frontend directory
cd movie-portal/movie-client-side

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup 

```bash
# Navigate to backend directory
cd movie-portal/movie-server-side

# Install dependencies
npm install

# Create .env file and add your MongoDB URI
echo "MONGODB_URI=your_mongodb_uri" > .env

# Start the server
npm run dev
```

The frontend will run on `http://localhost:5173` and the backend on `http://localhost:5000`.

## Environment Variables 

Create a `.env` file in the backend directory:

```env
MONGODB_URI=your_mongodb_uri
PORT=5000
```

## Deployment & Github Link

github client Link: https://github.com/shofiq18/movie-client-side

github server Link: https://github.com/shofiq18/movie-server-side

Live Link: https://movie-portal-4ef85.web.app/




