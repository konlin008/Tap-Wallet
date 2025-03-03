# Tap Wallet

Tap Wallet is a payment application that allows users to register, set a secure PIN, and transfer dummy money to other users. It is built with a **React** frontend and a **Node.js, Express, and MongoDB** backend.

[Live Demo](https://tap-wallet.vercel.app/add) – Check out the live version of Tap Wallet!

## Features

### Frontend
- User authentication (Login/Register)
- Set and manage secure PIN
- Transfer dummy money to other users
- Real-time notifications using **React Toastify**


### Backend
- Secure authentication with **bcrypt** and **JWT**
- User PIN and password hashing for security
- API endpoints for managing transactions
- Data validation using **Zod**
- Cross-origin support with **CORS**

## Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify
- Vite

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- bcrypt (for password hashing)
- JWT (for authentication)
- dotenv (for environment variables)
- Zod (for input validation)

## Installation & Setup

### Prerequisites
- Node.js and npm installed


### Clone the Repository
```sh
git clone https://github.com/konlin008/Tap-Wallet.git
cd Tap-Wallet
```

### Backend Setup
```sh
cd backend
npm install
npm start  # or use nodemon for development
```

### Frontend Setup
```sh
cd frontend
npm install
npm run dev
`
## Security Measures
- User passwords and PINs are securely hashed with **bcrypt**
- JWT authentication for session management
- Input validation with **Zod** to prevent invalid data entry
