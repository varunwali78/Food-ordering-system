# Food Ordering System

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Introduction

This is a full-stack food ordering web application built using the MERN stack (MongoDB, Express, React, Node.js). The application consists of a customer-facing app for ordering food and an admin app for managing orders, menu items, and more.

## Features

- User authentication and authorization
- Browse food items
- Add items to the cart and place orders
- Order tracking
- Admin panel to manage menu items, orders

## Technologies Used

- **Frontend:** React.js, React Context API, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS

## Installation

## Backend Setup

Navigate to the backend directory:

```sh
cd backend

```

Install dependencies:

```sh
npm install
```

Create a .env file in the backend directory and add the following:

```sh
JWT_SECRET="random#secret"
STRIPE_SECRET_KEY="sk_test_51JhWAiRXoTvIuM91beRv8XldfL3GGKyuLhzabkSwNeIXryY51G9UKnwNUFcotg0N6k4UAGhiprjJd4XhAF85JCN4004TC42zkl"
```

Start the backend server:

```sh
npm run server
```

## Frontend Setup

Navigate to the frontend directory:

```sh

cd frontend
```

Install dependencies:

```sh

npm install
```

Start the frontend server:

```sh

npm run dev
```

## Admin App Setup

Navigate to the admin directory:

```sh

cd admin
```

Install dependencies:

```sh
npm install
```

Start the admin app :

```sh
npm start
```

## Usage

Access the customer-facing app at http://localhost:5173.
Access the admin app at http://localhost:5174.
Register as a new user or log in with existing credentials.
Browse the menu, add items to the cart, and place an order.
Use the admin panel to manage orders, menu items.

## Screenshots

![1](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/b3d604f0-ae0e-4e29-9b95-51f6327c3952)
![2](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/0cb56d94-a715-48bd-9a7d-05c876a05b2c)
![3](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/f5dd216a-dc8d-4042-9a96-4884cdb17aef)
![Capture2](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/22fc6a58-b713-4ab7-babb-cff5844e7c55)
![Capture3](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/0f7fe1ab-8c29-4fa2-bdb2-7212994cdf80)
![Capture4](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/f41881c6-e148-4215-9953-458bbe602007)
![Capture5](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/34e366fa-8ee5-4f77-a5e0-d5d4ea294672)
![Capture6](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/1894f642-ea89-42de-ad74-de173c6c42aa)
