💼 Job Portal 

A full-featured Job Portal application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It allows job seekers to browse and apply for jobs and companies to post jobs, manage applicants, and track hiring progress — all with secure authentication, file uploads, and cloud storage.

🚀 Features

👨‍💼 For Companies

Secure JWT-based authentication

Upload company logos (via Cloudinary)

Post and manage job listings (title, salary, category, level, etc.)

View applicants and their resumes

Change job application status (Pending / Accepted / Rejected)

Toggle job visibility (Active / Inactive)

Access all company-related data in a protected dashboard

👩‍💻 For Users (Job Seekers)

Register & Login via Clerk Authentication (Webhook integrated)

Browse all active job listings

Apply for jobs with resume upload (Multer + Cloudinary)

Track all applications and statuses

Update profile and resume anytime


🧠 Tech Stack
Frontend

React.js

TailwindCSS / HTML / CSS

Axios

React Router

Backend

Node.js

Express.js

MongoDB (Mongoose ORM)

Cloudinary (for media storage)

Multer (for file uploads)

Clerk Webhooks (for user management)

JWT (for authentication)

Sentry (for monitoring & error tracking)

⚙️ Project Structure

job-portal/


│
├── frontend/

│   ├── src/

│   │   ├── components/          # Reusable UI components

│   │   ├── pages/               # All page views (Home, ApplyJob, Profile)

│   │   ├── context/             # Global state management

│   │   ├── assets/              # Images, icons

│   │   ├── App.jsx              # Main React component

│   │   └── main.jsx             # App entry file

│   ├── public/                  # Static assets

│   ├── package.json

│   └── tailwind.config.js



│
├── backend/


│   ├── config/


│   │   ├── cloudinary.js        # Cloudinary configuration


│   │   ├── multer.js            # Multer setup
│   │
│   ├── controllers/


│   │   ├── companyController.js # Company-related actions

│   │   ├── jobController.js     # Job listings & details

│   │   ├── userController.js    # User actions (apply, resume)

│   │   └── webhookController.js # Clerk user webhooks
│   │


│   ├── middlewares/

│   │   └── authMiddleware.js    # JWT protection
│   │


│   ├── models/

│   │   ├── Company.js

│   │   ├── Job.js

│   │   ├── JobApplication.js

│   │   └── User.js


│   │
│   ├── routes/

│   │   ├── companyRoutes.js

│   │   ├── jobRoutes.js

│   │   └── userRoutes.js

│   │
│   ├── utils/

│   │   └── generateToken.js     # JWT token generator

│   │
│   ├── server.js                # Backend entry file

│   └── package.json
│
└── README.md


⚙️ Installation & Setup

1️⃣ Clone the Repository

https://github.com/crazyrat3/job-portal.git

cd job-portal

2️⃣ Install Dependencies

cd backend


npm install

cd ../frontend

npm install

3️⃣ Environment Variables

MONGODB_URI=your_mongodb_connection_url

CLOUDINARY_NAME=your_cloudinary_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_SECRET=your_cloudinary_secret

JWT_SECRET=your_jwt_secret

CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

PORT=4000

4️⃣ Run the Application

cd backend

npm start

cd ../frontend

npm run dev

🧾 API Overview

🔐 Company APIs

| **Method** | **Endpoint**                     | **Description**                       |
| ---------- | -------------------------------- | ------------------------------------- |
| POST       | `/api/company/register`          | Register a company (with logo upload) |
| POST       | `/api/company/login`             | Login company                         |
| GET        | `/api/company/company`           | Get company profile                   |
| POST       | `/api/company/post-job`          | Post new job                          |
| GET        | `/api/company/applicants`        | Get all applicants for jobs           |
| GET        | `/api/company/list-jobs`         | List all jobs with applicant count    |
| POST       | `/api/company/change-status`     | Change applicant status               |
| POST       | `/api/company/change-visibility` | Toggle job visibility                 |


👨‍💻 User APIs

| **Method** | **Endpoint**              | **Description**         |
| ---------- | ------------------------- | ----------------------- |
| GET        | `/api/user/user`          | Get user data           |
| POST       | `/api/user/apply`         | Apply for a job         |
| GET        | `/api/user/applications`  | Get all applied jobs    |
| POST       | `/api/user/update-resume` | Upload or update resume |

💼 Job APIs

| **Method** | **Endpoint**    | **Description**      |
| ---------- | --------------- | -------------------- |
| GET        | `/api/jobs/`    | Get all visible jobs |
| GET        | `/api/jobs/:id` | Get job by ID        |


☁️ Cloudinary Integration

Used for storing company logos and resumes

Integrated via cloudinary.js

Credentials stored in .env

Supports automatic cleanup and optimization


🛡️ Authentication

Companies: JWT-based authentication using middleware

Users: Managed via Clerk Webhooks (auto-synced with MongoDB)


🧭 Monitoring & Error Tracking

Integrated Sentry for real-time error logging and performance tracking

Tracks backend errors and slow API responses in production

📸 Screenshots

login
<img width="1111" height="690" alt="recruiter login" src="https://github.com/user-attachments/assets/83eda4b0-2917-41f6-a066-451d9473e0c0" />

home page

<img width="1452" height="778" alt="Jobs" src="https://github.com/user-attachments/assets/795402ce-a8f9-42f1-89eb-144c6d3d5773" />

<img width="1494" height="811" alt="Home Page" src="https://github.com/user-attachments/assets/6ac4b3d5-b490-403b-95d4-bf03fedb041e" />

Applied Jobs

<img width="1477" height="687" alt="applied job" src="https://github.com/user-attachments/assets/917d24a2-fe28-4ea6-a680-79fabbc49bd8" />


Demo links

https://job-portal-client-4sl6qh5fu-anikets-projects-0a90484a.vercel.app/












