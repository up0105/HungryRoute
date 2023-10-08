# HungryRoute - Pizza Order Tracking System

HungryRoute is a robust pizza order tracking system built with Laravel, React JS, Inertia JS, Tailwind CSS, and MySQL.

## Overview

This project showcases the power of Laravel, React, and Inertia.js in creating a dynamic and responsive pizza order tracking system. It utilizes automatic polling and live reloads for seamless user experience.

## Getting Started

Follow these steps to set up and run the HungryRoute project on your local environment:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/HungryRoute.git
   cd HungryRoute

2. **Set Up Environment Variables**

   Create a copy of the .env.example file and rename it to .env.

   ```bash
   cp .env.example .env

   Modify the .env file to include your specific database and environment configurations.

3. **Install Dependencies**

   ```bash
    composer install
    npm install

4. **Migrate and Seed the Database**

   ```bash
   php artisan migrate --force
   php artisan db:seed

5. **Start the Development Server**

   ```bash
    php artisan serve

6. **Compile Assets**

   Open a new terminal window/tab and run:

   ```bash
   npm run dev

7. **Access the Application**

   Open your preferred web browser and navigate to http://localhost:8000. You can use the register link to create an account and explore the seeded pizza orders.
   
