# ProShop

**Live Demo:** [https://proshop-sand.vercel.app](https://proshop-sand.vercel.app/)

---

## Project Description
ProShop is a modern e-commerce web application built with **Next.js**, **MongoDB**, and **NextAuth.js**. It allows users to browse products, register/login (including Google OAuth), and add products through a protected dashboard. The app features:

- User authentication & role-based dashboard
- Add, view, and list products
- Responsive design with **DaisyUI** components
- Real-time product addition on client-side fetch
- Clean UI/UX with modern styling and interactive elements

---

## Features

- **Authentication:** Email/password & Google login
- **Protected Routes:** Only logged-in users can add products
- **Product Management:** Add product with name, price, category, stock, description, and image
- **Responsive Design:** Works on mobile, tablet, and desktop
- **Dynamic Routing:** Individual product detail pages
- **SweetAlert2:** Notifications for user actions

---

## Tech Stack

- **Frontend:** Next.js 13 (App Router), React, DaisyUI, Tailwind CSS
- **Backend:** Node.js API routes
- **Database:** MongoDB
- **Authentication:** NextAuth.js (credentials & Google OAuth)
- **Deployment:** Vercel

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/proshop.git
cd proshop

Install dependencies

npm install


Environment Variables

Create a .env file in the root directory with the following:

MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret


Run the project

npm run dev


Visit http://localhost:3000
 in your browser.

Build for production

npm run build
npm start
