# ShopSphere

Welcome to **ShopSphere** 
ShopSphere is a fully functional e-commerce website built using React.js. The project includes product pages, a shopping cart, an authentication system, a checkout process, and many other essential e-commerce features. This README provides an overview of the code and highlights key components and functionalities.

## Table of Contents
1. [Demo](#demo)
2. [Features](#features)
3. [Tech Stack ](#tech-stack)
4. [Installation](#installation)
5. [Getting Started](#getting-started)
6. [Usage](#usage)


## Demo
Explore the live version of ShopSphere: [ShopSphere Live Demo](https://your-demo-url.com)

## Features

1. **Dynamic Product Catalog**: Enables users to search, filter, and browse products by categories and keywords, providing easy navigation through extensive listings.

2. **User Authentication**: Includes secure login, registration, and password recovery, powered by Formik and Yup for validation, ensuring user data protection.

3. **Shopping Cart & Wishlist**: Add items to a shopping cart or wishlist with interactive UI feedback, allowing for easy management and purchase planning.

4. **Promotional Discounts**: Redeemable promo codes for discounts (e.g., 20% off) on the total order, allowing users to apply promotions directly in the cart.

5. **Responsive Design**: Fully responsive layouts designed with Bootstrap 5, ensuring a seamless experience across all devices and screen sizes.

6. **Product Carousels & Animations**: Engaging product and promotional carousels with hover effects, transitions, and icons to enhance visual appeal.

7. **Notifications & Toasts**: Provides user feedback with notifications and toasts for successful actions, errors, or updates, improving user experience.

8. **Password Reset via Email**: Secure password reset option, allowing users to regain access through email-based recovery.

9. **Item Management in Cart**: Allows users to add, update, and delete items directly in the shopping cart for better control over orders.

10. **Multiple Payment Options**: Supports both cash on delivery and online payment methods at checkout, offering flexibility and convenience.

11. **New & Coming Soon Products Section**: Displays upcoming or newly launched products in an animated, stylish layout to keep users engaged.

12. **Neon Effects in UI**: Stylish neon effects incorporated in UI elements, adding a unique and modern visual touch to the interface.

13. **Detailed Product Descriptions**: Provides users with comprehensive product details, including specifications and features, for informed purchase decisions.

14. **Category-Based Filtering**: Allows users to filter products by category, making it easy to locate specific items.

15. **Footer Navigation Links**: Contains quick links to pages like Home, Categories, Contact Us, and Terms of Service for easy accessibility.

16. **Footer Contact Information**: Displays essential contact details, including social media links, customer support email, and phone number, for user convenience.

17. **Order Confirmation Notifications**: After purchase, users receive confirmations for transparency and trust in the order process.

18. **Accessible Navigation Bar**: Includes clear links to essential pages like Home, Categories, and Cart, optimizing site navigation.

19. **Search Functionality**: Allows users to search for products using keywords, improving usability and quick access to desired items.

20. **Animated Checkout Buttons**: Checkout page features animated buttons for 'Cash on Delivery' and 'Online Payment,' adding a visual appeal to the payment process.


## Tech Stack 

### **1. Frontend Framework**
- **React**: Core JavaScript library for building interactive user interfaces.
- **React Router (react-router-dom)**: Provides dynamic routing to enable single-page application navigation.

### **2. State Management & Data Fetching**
- **React Query (@tanstack/react-query)**: Manages server-state with features for data fetching, caching, and synchronization.
- **React Query Devtools**: Debugging tool for visualizing and managing React Query operations during development.

### **3. Form Handling & Validation**
- **Formik**: Simplifies form creation and management, handling input values, and submitting data.
- **Yup**: Schema-based validation library used with Formik for validating form inputs.

### **4. UI Components & Icons**
- **Bootstrap**: Responsive front-end component library for a consistent layout across various devices.
- **Bootstrap Icons**: Collection of icons designed for Bootstrap styling.
- **FontAwesome**: Icon library that provides scalable vector icons for interactive elements.
- **React Icons**: Consolidated library with popular icon sets (including FontAwesome) for React applications.

### **5. Image Carousels & Sliders**
- **React Slick**: React wrapper for Slick Carousel, used for creating responsive and animated carousels.
- **Slick Carousel**: The core carousel library offering smooth slide animations and touch support.

### **6. APIs & Data Fetching**
- **Axios**: Promise-based HTTP client used to communicate with the backend API for data fetching and posting.

### **7. Loading Indicators & Notifications**
- **React Loader Spinner**: Provides customizable loading spinners to indicate loading states.
- **React Hot Toast**: Displays toast notifications for instant feedback on user actions, like successful form submissions or errors.
- **React Detect Offline**: Detects network status and notifies users when offline, allowing for improved user experience during connectivity issues.

### **8. Utility Libraries**
- **React Helmet**: Manages changes to the document head, useful for SEO and setting page metadata.
- **JWT Decode**: Decodes JSON Web Tokens (JWT) to extract user information, enhancing authentication flow.
- **AJV**: JSON schema validator to ensure data structure consistency.
- **AJV Keywords**: Extends AJV with additional keywords for custom validation, enabling advanced JSON validation.

### **9. Testing**
- **@testing-library/react**: Facilitates React component testing by simulating user interactions.
- **@testing-library/jest-dom**: Extends Jest with custom matchers for DOM assertions, simplifying DOM testing.
- **@testing-library/user-event**: Simulates realistic user interactions (like clicks and typing) for improved test coverage.

### **10. Deployment & Build Tools**
- **React Scripts**: Provides scripts for common tasks like development, building, and testing in Create React App (CRA).
- **gh-pages**: Utility for deploying the application to GitHub Pages for easy, accessible deployment.
- **Popper.js**: Manages the positioning of dropdowns, tooltips, and popovers in Bootstrap, adding smooth positioning features.

### **11. Development & Performance Tools**
- **Web Vitals**: Collects key performance metrics (like loading, interactivity) to help optimize user experience.


## Installation
To get started with ShopSphere:
```bash
# Clone the repository
git clone [https://github.com/SaraReda8/ShopSphere.git]

# Navigate into the project directory
cd ShopSphere

# Install dependencies
npm install

# Start the development server
npm start

