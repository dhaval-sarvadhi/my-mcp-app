# My MCP App

A fullstack project with a Node.js/Express backend (server) and a Vite + React frontend (client).

---

## Project Structure

```
my-mcp-app/
├── client/   # Vite + React frontend
├── server/   # Node.js + Express + Sequelize backend
└── README.md # Project documentation
```

---

## Technologies Used

### Server
- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- Class-based controllers, routes, and scalable structure

### Client
- React (Vite)
- Tailwind CSS
- styled-components
- shadcn/ui

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- PostgreSQL (running and accessible)

### 1. Clone the repository
```sh
git clone <your-repo-url>
cd my-mcp-app
```

### 2. Setup the Server
```sh
cd server
cp .env.example .env # Create your .env file and set DB credentials
npm install
npm start
```

#### Example .env for server
```
DB_NAME=my-mcp
DB_USER=postgres
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=5432
PORT=8082
```

### 3. Setup the Client
```sh
cd client
npm install
npm run dev
```

---

## Scripts

### Server
- `npm start` — Start the Express server

### Client
- `npm run dev` — Start the Vite React development server

---

## Features
- Scalable, class-based backend structure (controllers, routes, models)
- PostgreSQL database with Sequelize ORM
- Modern React frontend with Tailwind CSS, styled-components, and shadcn/ui
- Example: Connect server button to test backend connection

---

## Contributing
Feel free to open issues or submit pull requests for improvements!

---

## License
MIT 