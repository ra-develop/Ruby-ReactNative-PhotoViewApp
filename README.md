📸 PhotoViewApp – Full-Stack Photo Viewer
=========================================

📝 Project Overview
-------------------

**PhotoViewApp** is a simple full-stack mobile application built with **React Native** using **Expo**, allowing users to browse and view photos. The app communicates with a custom **Ruby on Rails** backend that serves photo data via a RESTful API.

This project demonstrates clean architecture, mobile-backend integration, and a modern mobile user interface.

🚀 Tech Stack
-------------

### Frontend

*   **Framework:** React Native (with Expo)
    
*   **Language:** JavaScript / TypeScript
    
*   **Navigation:** React Navigation
    
*   **State Management:** React hooks / Context API (if used)
    
*   **UI Components:** NativeBase / React Native Paper (if applicable)
    

### Backend

*   **Framework:** Ruby on Rails
    
*   **API:** RESTful endpoints to serve photo data
    
*   **Database:** SQLite / PostgreSQL (depending on setup)
    

📂 Project Structure (Frontend)
-------------------------------

```bash
mobile/
├── assets/ # Static resources (images, fonts, etc.) 
├── screens/ # App screens (Home, Photo Detail, etc.) 
├── App.js # App entry point 
└── package.json # Expo configuration
``` 

📸 Features
-----------

*   Browse a list of photos served from the backend
    
*   View photo details with full-screen preview
        
*   Responsive design for various screen sizes
    

🔧 Getting Started
------------------

### Prerequisites

*   Node.js and npm
    
*   Expo CLI
    
*   Ruby and Rails
    
*   Git
    

### Run the App

1.  Clone the repository:
        
    ```bash
    git clone https://github.com/your-username/PhotoViewApp.git
    ``` 
    
3.  Install dependencies:
    
        
    ```bash
    cd PhotoViewApp
    npm install
    ``` 
    
4.  Start the Expo development server:

    ```bash
    npm start
    ```
    
5.  Run on a simulator or Expo Go mobile app.
    

### Start the Backend

1.  Navigate to the backend directory (if in a separate repo/folder):
2.  
    ```bash
    cd backend
    bundle install
    rails db:setup
    rails server
    ``` 
    

✅ Future Improvements
---------------------

*   Authentication & user accounts
    
*   Like/favorite functionality
    
*   Offline support
    
*   Pagination and image caching
    

📬 Contact
----------

For questions or feedback, feel free to reach out at:  
**Rashid Amanzholov** – [LinkedIn](https://www.linkedin.com/in/your-profile/) | Email



