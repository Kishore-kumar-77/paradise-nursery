# Paradise Nursery Shopping Application

## Project Name

**Paradise Nursery – Online Plant Shopping Application**

## Description

Paradise Nursery is a React-based online shopping application designed for users to browse and purchase a variety of houseplants.

The application provides a simple and user-friendly shopping experience where users can explore different categories of plants, add plants to their shopping cart, adjust quantities, remove items, and view the total cost of their order.

## Features

* 🌱 Paradise Nursery landing page
* 🪴 Multiple houseplant categories
* 🌿 At least six unique plants per category
* 🛒 Add plants to the shopping cart
* 🔢 Dynamic shopping cart item count
* ➕ Increase plant quantity
* ➖ Decrease plant quantity
* 🗑️ Remove plants from the cart
* 💰 Automatic calculation of individual and total cart costs
* 🏠 Home, Plants, and Cart navigation
* 🛍️ Continue Shopping functionality
* 💳 Checkout button with "Coming Soon" message
* ⚛️ Redux Toolkit for shopping cart state management
* 📱 Responsive user interface

## Pages

### 1. Home / Landing Page

The landing page contains:

* Paradise Nursery company name
* Background image
* Company description
* Get Started button

The **Get Started** button navigates users to the plant listing page.

### 2. Plants / Product Listing Page

The product listing page displays houseplants grouped into different categories.

Each plant contains:

* Plant thumbnail
* Plant name
* Plant price
* Add to Cart button

After a plant is added to the cart, its Add to Cart button becomes disabled and the shopping cart count is updated.

### 3. Shopping Cart Page

The shopping cart page displays:

* Total number of plants
* Total cart amount
* Plant thumbnail
* Plant name
* Unit price
* Quantity controls
* Individual plant total
* Delete button
* Continue Shopping button
* Checkout button

The cart automatically updates whenever the quantity of a plant is increased, decreased, or removed.

## Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Redux Toolkit
* React Router
* Git
* GitHub
* GitHub Pages

## State Management

Redux Toolkit is used to manage the shopping cart.

The cart supports:

* Adding products
* Increasing quantities
* Decreasing quantities
* Removing products
* Calculating cart quantities
* Calculating cart totals

## Project Structure

```text
paradise-nursery/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductList.jsx
│   │   └── CartItem.jsx
│   │
│   ├── redux/
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
└── README.md
```

## How to Run the Project

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/paradise-nursery.git
```

Navigate to the project directory:

```bash
cd paradise-nursery
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal to view the application.

## Deployment

The application is deployed using GitHub Pages.

**Live Demo:**
Add your GitHub Pages URL here after deployment.

```text
https://YOUR_USERNAME.github.io/paradise-nursery/
```

## GitHub Repository

**Repository:**
Add your public GitHub repository URL here.

```text
https://github.com/YOUR_USERNAME/paradise-nursery
```

## Project Purpose

The purpose of this project is to demonstrate the development of a functional React shopping application with component-based design, routing, Redux state management, dynamic cart functionality, and deployment using GitHub Pages.
