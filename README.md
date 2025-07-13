# Nexus Popflix 🍿✨

**A full-stack streaming service experience, dynamic movie/TV show database, and personalized recommendation engine.**

## Table of Contents

1.  [About Nexus Popflix](#about-nexus-popflix)
2.  [Key Features](#key-features)
3.  [Tech Stack](#tech-stack)
    * [Initial Core Stack](#initial-core-stack)
    * [Planned Future Additions](#planned-future-additions)
4.  [Data Strategy](#data-strategy)
5.  [Recommendation Engine Approach](#recommendation-engine-approach)
6.  [UI/UX Design Philosophy](#uiux-design-philosophy)
7.  [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Running the Application](#running-the-application)
8.  [Future Enhancements](#future-enhancements)
9.  [License](#license)
10. [About the Developer](#about-the-developer)

---

## About Nexus Popflix

Nexus Popflix is an ambitious personal project aiming to deliver a modern web application that combines the rich functionality of a movie and TV show database with an intuitive streaming-like user experience. While it leverages external platforms for actual video content (primarily YouTube for trailers), the core focus is on intelligently organizing, presenting, and recommending content metadata to users.

This project is a testament to applying a logical and algorithmic mindset to complex full-stack challenges, including frontend design and data management.

---

## Key Features

* **Dynamic Movie & TV Show Database:** Browse, search, and view detailed information (titles, descriptions, genres, cast, posters, etc.) about a vast collection of films and series.
* **Streaming Experience:** Seamlessly embed and play YouTube trailers directly within the application, providing a cohesive content consumption flow.
* **Personalized Recommendations (Initial - JS-based):** Intelligent suggestions based on content attributes like genre combinations and production language.
* **User Accounts & Profiles:** Secure user registration and login, with personalized settings and content management features (e.g., watchlists, favorites).
* **Premium Title Management (Planned):** Functionality to track user ownership and access to specific "premium" content titles.
* **Intuitive UI/UX:** A clean, responsive, and user-friendly interface designed with a focus on logical component reusability and iterative refinement.

---

## Tech Stack

Nexus Popflix is built with a modern, robust, and scalable set of technologies.

### Initial Core Stack

* **Frontend:**
    * **Typescript:** For adding type-checking and enhancing developer experience.
    * **React:** For building a dynamic, component-based user interface.
    * **Vite:** A fast and modern build tool, ensuring a smooth and rapid development experience.
    * **Tailwind CSS:** A utility-first CSS framework for efficient and consistent styling.
    * **Zustand:** A lightweight and performant library for global state management within the React application.
* **Backend:**
    * **Typescript:** For adding type-checking and enhancing developer experience.
    * **Node.js:** The powerful JavaScript runtime environment.
    * **Express.js:** A minimalist and flexible web framework for building robust RESTful APIs.
* **Database (Primary):**
    * **MySQL:** Used for highly structured data requiring strong relational integrity, such as user accounts, authentication-related details (until Firebase integration), and premium content purchase records. Leverages its native `JSON` data type for flexible user settings and UI preferences.
* **Data Interchange:**
    * **JSON:** The standard format for all API communication between the frontend and backend, and for managing initial ingested movie metadata.
* **Version Control:**
    * **Git:** For tracking all code changes and collaboration.
    * **GitHub:** The remote repository for project hosting and management.

### Planned Future Additions

* **NoSQL Database:**
    * **MongoDB:** To manage the large volume of downloaded movie/TV show metadata, benefiting from its flexible, document-based schema.
* **Authentication Service:**
    * **Firebase Authentication:** To handle secure user registration, login, and robust authentication mechanisms, offloading authentication complexity from the custom backend.
* **Advanced Recommendations:**
    * **Python (with AI/ML libraries):** To implement more sophisticated, personalized recommendation algorithms (e.g., collaborative filtering), integrated as a dedicated microservice.

---

## Data Strategy

Nexus Popflix employs a hybrid data strategy:

* **External API Data Ingestion:** Initially, movie and TV show metadata will be sourced from popular external APIs (e.g., The Movie Database - TMDB). This data will be "cleaned up" and managed locally.
* **Initial Metadata Management:** During early development, downloaded API data will be handled as local JSON files or in-memory objects, with a focus on internal indexing for efficient lookups within the Node.js application.
* **Relational Data (MySQL):** Core user information, subscription status, and transactional data related to premium content access will reside in MySQL, leveraging its strengths for structured, relational data.
* **NoSQL Metadata (MongoDB - Later):** The bulk of the movie/TV show metadata will later be migrated to MongoDB for its flexibility and scalability in handling varied document structures and efficient querying of large datasets.

---

## Recommendation Engine Approach

The recommendation system will evolve in phases:

* **Phase 1 (Initial - JavaScript):** Recommendations will be **content-based**, implemented directly within the Node.js backend using JavaScript. This phase will focus on finding content similarity based on attributes like genre combinations and production languages. This approach leverages logical comparisons and filtering.
* **Phase 2 (Future - Python AI/ML):** The system will transition to more advanced, AI/Machine Learning-driven algorithms using Python. This will likely involve building a separate Python microservice that the Node.js backend communicates with, allowing for sophisticated personalized suggestions.

---

## UI/UX Design Philosophy

My approach to UI/UX design for Nexus Popflix is rooted in "hacking creativity" by breaking down design into logical, manageable processes. This involves:

* **Component-Based Design:** Deconstructing complex UI elements into reusable components.
* **Inspiration-Driven:** Leveraging external design resources (like Dribbble) for inspiration, then systematically "detaching, selecting, adjusting, reattaching, and readjusting" components to fit the project's unique needs.
* **Utility-First Styling:** Utilizing Tailwind CSS to rapidly build consistent and clean interfaces by applying predefined utility classes.
* **Focus on Logic & Consistency:** Prioritizing clear information architecture, intuitive user flows, and visual consistency over abstract artistic creation, aligning with a more algorithmic problem-solving mindset.

---

## Getting Started

To get Nexus Popflix up and running locally, follow these steps:

### Prerequisites

* **Git:** Version control system.
    * `git --version`
* **Node.js:** JavaScript runtime (LTS version recommended).
    * `node -v`
* **npm (Node Package Manager):** Comes with Node.js.
    * `npm -v`
* **MySQL Server:** Your relational database.
    * Ensure MySQL is installed and running on your system (e.g., `sudo apt install mysql-server` on Ubuntu).
    * You'll need a MySQL database and a user configured for Nexus Popflix.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/owen-6936/nexus-popflix.git]
    cd nexus-popflix
    ```
2.  **Install Frontend Dependencies:**
    Navigate to the frontend directory (e.g., `cd client` or `cd frontend` - *you'll define this structure*).
    ```bash
    npm install
    ```
3.  **Install Backend Dependencies:**
    Navigate to the backend directory (e.g., `cd server` or `cd backend` - *you'll define this structure*).
    ```bash
    npm install
    ```
4.  **Database Setup:**
    * Create your `nexus_popflix_db` database and `nexus_user` in MySQL.
    * Create a `.env` file in your backend directory and add your MySQL connection details:
        ```env
        DB_HOST=localhost
        DB_USER=nexus_user
        DB_PASSWORD=your_strong_password
        DB_DATABASE=nexus_popflix_db
        ```
    * You'll later need to implement database migrations or initial schema setup scripts.

### Running the Application

1.  **Start the Backend Server:**
    From your backend directory (`server`/`backend`):
    ```bash
    npm start
    # or `npm run dev` if you set up a development script with nodemon
    ```
    The backend will typically run on `http://localhost:5000`.

2.  **Start the Frontend Development Server:**
    From your frontend directory (`client`/`frontend`):
    ```bash
    npm run dev
    ```
    The frontend will typically run on `http://localhost:5173` (Vite's default) and automatically open in your browser.

---

## 8. Future Enhancements

As Nexus Popflix evolves, key areas for future development include:

* **Full MongoDB Integration:** Migrating core movie/TV show metadata from initial JSON to a robust MongoDB database.
* **Firebase Authentication:** Implementing secure user sign-up, sign-in, and session management via Firebase.
* **Advanced Python Recommendations:** Developing and integrating sophisticated AI/ML algorithms in Python for highly personalized content suggestions.
* **Full User Profile Management:** Expanding user profiles beyond basic details to include watch history, custom lists, and more detailed preferences.
* **Payment Gateway Integration:** For handling premium title purchases securely.
* **Search & Filtering Enhancements:** More advanced search capabilities and refined content filtering.

---

## 9. License

This project is open-source and available under the **MIT License**. See the `LICENSE` file for more details.

---

## 10. About the Developer

Nexus Popflix is proudly developed by Owen, an aspiring full-stack developer with a passion for vanilla JavaScript and Node.js. My strength lies in algorithmic and logical problem-solving, and I enjoy "hacking creativity" by applying structured thinking to UI/UX design challenges. This project is a significant step in my journey to master modern web development.
