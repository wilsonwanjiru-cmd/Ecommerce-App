# **E-commerce Application Documentation**

## **Overview**
This is a full-stack E-commerce application built using the **MERN stack** (MongoDB, Express.js, React, Node.js) following the **MVC (Model-View-Controller)** architecture pattern.

The application enables users to browse products, add them to a cart, and place orders. Administrators can manage products, orders, and users through a dedicated admin panel.

---

## **Key Features**

### **User Authentication**
- Secure login and registration using **JWT (JSON Web Tokens)**.
- Passwords are hashed using **bcrypt** for enhanced security.

### **Product Management**
- Add, update, and delete products.
- Product listing with detailed information.

### **Shopping Cart**
- Users can add/remove items from the cart.
- Cart persists during the session.

### **Order Processing**
- Place orders and track status.
- Admin can manage and update order statuses.

### **Responsive Design**
- Fully responsive UI for mobile and desktop.

### **Admin Dashboard**
- Manage users, products, and orders.

---

## **Tech Stack**

### **Frontend**
- **React.js**: Handles UI components and routing.
- **React Icons**: Used for consistent and visually appealing icons.

### **Backend**
- **Node.js**: Server runtime.
- **Express.js**: Web framework for API development.
- **MongoDB**: Database for storing data.
- **Mongoose**: ODM for MongoDB to manage schemas and interactions.

### **Other Tools**
- **bcrypt**: Password hashing.
- **jsonwebtoken**: Token-based authentication.
- **dotenv**: Environment variable management.
- **cors**: Cross-Origin Resource Sharing.
- **nodemon**: Development utility for automatic server restarts.

---
# **Installation and Setup**

## **Backend Setup**

1. **Clone the repository:**
   ```bash
   git clone [<repository-url>](https://github.com/wilsonwanjiru-cmd/Ecommerce-App/edit/main/README.md)
   cd ecommerce-app
---
# **2. Install dependencies:**
    ```bash
    npm install
---
# **Start the server:**
Start the server:
     
     npm start

---

# **Set up environment variables:**
Create a .env file in the root directory and add the following:
   ```bash
     PORT=5000
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret>
--





    


   


