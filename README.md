# 🏡 Real Trust – Real Estate & Consulting Platform

Real Trust is a full-stack real estate and consulting web application developed using **React.js** for the frontend and **Spring Boot** for the backend.  
The application allows users to submit their contact details, which are securely stored in the backend database and displayed in an admin dashboard.

---

## 🔗 Live Application

### 🌐 Frontend (Netlify)
https://real-trust.netlify.app

### ⚙️ Backend API (Render)
https://real-trust-backend-thpj.onrender.com

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6)
- HTML5 & CSS3
- Fetch API
- Responsive Design
- Deployed on **Netlify**

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs
- PostgreSQL (Render Managed Database)
- Docker
- Deployed on **Render**

---

## 📂 Project Structure

real-trust/
│
├── frontend/
│ ├── public/
│ └── src/
│ ├── components/
│ ├── admin/
│ ├── App.js
│ └── index.js
│
├── backend/
│ ├── src/main/java
│ ├── src/main/resources
│ ├── Dockerfile
│ ├── pom.xml
│ └── mvnw
│
└── README.md

yaml
Copy code

---

## ✨ Features

### 👤 User Side
- Modern real estate landing page
- Contact form with fields:
  - Full Name
  - Email
  - Mobile Number
  - City
- Form data sent to backend API

### 🛡️ Admin Panel
- Admin dashboard built in React
- View all contact form submissions
- Data fetched from backend REST APIs

---

## 🔄 Backend API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/contacts` | Save contact details |
| GET  | `/api/contacts` | Get all contact submissions |

---

## ⚙️ Environment Variables

### Backend (Render)
SPRING_DATASOURCE_URL=jdbc:postgresql://<host>:5432/real_trust_db
SPRING_DATASOURCE_USERNAME=real_trust_db_user
SPRING_DATASOURCE_PASSWORD=********
SPRING_JPA_HIBERNATE_DDL_AUTO=update

shell
Copy code

### Frontend (Netlify)
REACT_APP_API_URL=https://real-trust-backend-thpj.onrender.com

yaml
Copy code

---

## 🐳 Docker Configuration (Backend)

```dockerfile
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
🚀 Deployment Details
Frontend
Platform: Netlify

Build Command:

bash
Copy code
npm run build
Publish Directory:

nginx
Copy code
build
Backend
Platform: Render

Runtime: Docker

PostgreSQL database provided by Render

Auto-deploy from GitHub main branch

🧪 Run Project Locally
Backend
bash
Copy code
cd backend
mvn spring-boot:run
Frontend
bash
Copy code
cd frontend
npm install
npm start
📌 Future Improvements
Admin authentication & authorization

Search and pagination in admin dashboard

Email notifications on form submission

Property listings & management module

👨‍💻 Author
Prince Jaiswal
Java | Spring Boot | React | Full-Stack Developer

GitHub: https://github.com/Princejwl
