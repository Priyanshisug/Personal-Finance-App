<<<<<<< HEAD
# Personal-Finance-App
=======
# Pre-Requisite

1. Docker
2. Docker Compose

# How to Deploy Application

1. Run `docker-compose up --force-recreate  --remove-orphans --renew-anon-volumes --build`.
2. Open `http://localhost` on browser.

> Note: Ensure PORT `8080`,`80` is available

# Project Structure

```
📦 Root
├─ backend
├─ frontend
├─ mysql
├─ docker-compose.yml
└─ README.md
```

# Tech Stack and Design Choices

1. Backend

   1. NodeJS - Chosen for its event-driven, non-blocking I/O, making it suitable for handling real-time updates.Its ecosystem offers a wide range of packages and libraries for building web applications.

   2. MySQL - A robust, open-source relational database known for its reliability, scalability, and support for complex queries. A relational database is suitable for structured data storage, making it a good choice for user profiles and chart configurations.

2. Frontend

   1. React - Was chosen for its component-based architecture, which promotes modularity and reusability.

   2. JavaScript - A widely supported and performant language for client-side scripting.

   3. Bootstrap - Provides a utility-first CSS framework for rapid UI development and customization.

3. Container
   1. Docker - Ensures consistency in deploying the application across different environments.

# High Level Architecture

![High Level Architecture](architecture.jpg)

The system architecture consists of three main components:

1. Frontend: Developed using React.js.

2. Backend: Developed using Node.js and Express.js.

3. Database: Utilizing a relational database (MySQL) to store user data and configuration settings.

# Components

## Frontend

1. User Authentication: Implements user registration, login, and authorization.

2. Analytics Dashboard: Offers user-friendly forms to select parameters and filtering options. Dynamically generates various chart types (Pie Charts, Bar Charts) in real-time based on user selections. Allows users to customize chart colors and sizes. Supports creating dashboards with multiple charts.

## Backend

1. API Framework: Utilizes Express.js to implement RESTful APIs for user management, data retrieval, and chart customization.

<!-- 2. Authentication and Authorization: Implements a secure user authentication system, including robust password validation. Ensures authorized access to APIs using Passport. -->

3. Data Processing: Fetches and processes data from the specified dataset. Manages chart generation and customization.

<!-- 4. Database Interaction: Interacts with the database to store user information, chart configurations, and authentication tokens. -->

## Database

1. Schema: Implements a scalable database schema to store user profiles, chart configurations, and authentication data.

2. Database Technology: Utilizes MySQL for data storage.
<!--

# Authentication, Authorization, and Security Framework

1. Authentication: Implementing JWT (JSON Web Tokens) for secure user authentication.

2. Authorization: Using middleware to ensure authorized access to APIs.

3. Security: Implementing robust password validation and following security best practices.Passwords are stored securely with strong hashing. -->

<!-- # Limitations and Future Scope

- [ ] Multiple data sets cannot be utilized. Potential to connect to different data sources.

- [ ] Ability to create multiple dashboards by a single user.

- [ ] Ability to remove and modify charts from an existing dashboard.

- [ ] Additional visualization components required:

  - [ ] Widgets
  - [ ] Tables
  - [ ] More complex visualization

- [ ] Ability to customize visualization such as title, legends etc.

- [ ] Code optimization and efficient database queries enhance overall application performance.

- [ ] Implementation of unit test cases to ensure build stability.  -->

 <!-- # Scaling Strategies

1. The use of load balancers and multiple backend instances will allow the application to scale horizontally.

2. Implementing caching strategies will help to reduce the load on the database and API, improving response times.

3. Utilization of OLAP Databases for analytical purposes. 

# Jira Stories

[Jira Stories](Jira.md) -->
>>>>>>> 2eb8ad6 (Initial commit - personal finance app)
