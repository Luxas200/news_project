News_Project

Overview

News_Project is a comprehensive web application for managing articles. It combines a React frontend with a Django backend to offer a feature-rich platform for users to read, like, edit, create, and delete articles. The application tracks the popularity of articles through read counts and supports dynamic interactions, such as real-time updates and customizable features.

Features

Frontend:
1. Homepage:    
   Displays a dynamic list of articles using the  component.
   Enables CRUD operations (Create, Read, Update, Delete) for articles via modals.
   Tracks and updates article likes and highlights liked articles with unique styles.
   Integrates navigation to detailed views of articles () using React Router.
        
2. Article Detail Page:    
   Displays detailed article information (image, content, publication date, and read count).
   Increments and updates the read count via an API call.
   provides easy navigation back to the homepage.
        
3. Reusable Components:    
    Modal: A fully customizable modal for adding or editing articles.
    Article: A single article representation, including interactive like and delete buttons.
          
4. Routing:    
   React Router is used for navigating between the homepage and detailed views of individual articles.

Backend:
1. Django REST API:
   ArticleListCreateView: Handles article creation and retrieves a list of articles, ordered by publication date.
   ArticleDetailView: Provides full CRUD operations for individual articles.
   Increment_read_count: Tracks how many times each article has been read.
   
2. Data Models:
   Article:  Contains fields like title, content, published date, image URL, and read count, supporting all operations for articles.
   
3. Endpoints: 
   /api/articles/: For listing and creating articles.
   /api/articles/<id>/: For retrieving, updating, and deleting specific articles.
   /api/articles/<id>/read/: A custom endpoint to increment an article's read count.


Technologies Used


Frontend:

1. React: For building interactive and reusable UI components.
2. CSS: To style the components.
3. React Router: For navigation.

Backend:

1. Django: As the backend framework for creating RESTful APIs.
2. Django REST Framework (DRF): For API serialization and handling requests.
3. Python: The primary backend programming language.

How to Run the Project

Backend:

1. Clone the repository and navigate to the backend directory.
2. Install dependencies using:
   
        pip install -r requirements.txt
   
3. Run migrations:
   
        python manage.py migrate

4. Start the Django server:
   
        python manage.py runserver

Frontend:

1. Navigate to the frontend directory.
2. Install dependencies using:
   
        npm install
   
3. Start the development server:
   
        npm run dev

Usage:
    1. Open your browser and navigate to http:/localhost:5174 to access the frontend.
    2. The backend will be running at http:/127.0.0.1:8000.

Code Structure

Frontend:

1. App.jsx: Configures routing and includes essential components.
2. Home.jsx: Manages the article list and performs CRUD operations with fetch.
3. ArticleDetail.jsx: Displays detailed article information and updates the read count via an API.
4. Article.jsx: Represents individual articles with interactivity, including a like system.
5. Modal.jsx: Implements reusable modal functionality.

Backend:

1. models.py: Defines the Article model with fields for title, content, read count, and image URL.
2. views.py: Implements class-based views and a custom function to increment read counts.
3. urls.py: Maps URLs to views for CRUD operations and custom endpoints.

Key Highlights

1. Real-time read count updates to track article engagement.
2. Interactive like/unlike functionality to enhance user engagement.
3. Modal-based article creation and editing for a seamless user experience.
4. Responsive design and robust routing.

Future Enhancements

1. Implement user authentication to allow personalized article management.
2. Add pagination for managing large datasets.
3. Integrate a search feature for easier article discovery.
4. Add unit tests for improved reliability.








       





