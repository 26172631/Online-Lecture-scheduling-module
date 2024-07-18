Lecture Scheduling Module
This project is a lecture scheduling module built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It features an admin panel for managing instructors, courses, and lecture schedules, as well as an instructor panel for viewing assigned lectures.

Features
Admin can view a list of all instructors.
Admin can add courses with details including name, level, description, image, and multiple lectures.
Admin can assign lectures to instructors on specific dates.
Prevents assigning multiple lectures to the same instructor on the same date.
Instructors can view their scheduled lectures with dates and course names.
Installation
Clone the repository:

git clone https://github.com/26172631/Online-Lecture-scheduling-module.git
cd online-lecture-scheduling-module
Install server dependencies:

cd server
npm install
Install client dependencies:

cd ../client
npm install
Set up MongoDB:

Ensure MongoDB is installed and running on your system. You can download MongoDB here.

Configure environment variables:

Create a .env file in the server directory and add the following:

MONGODB_URI=mongodb://localhost:27017/lecture-scheduler
Usage
Start the server:

cd backend
nodemon index.js
The server will run on http://localhost:4000.

Start the client:

cd frontend
npm start
The client will run on http://localhost:3000.

API Endpoints
Instructors
GET /instructor/getallInstructor: Get all instructors.
POST /instructor/createinstructor: Add a new instructor.
Courses
GET /course/getallcourse: Get all courses.
POST /course/createcourse: Add a new course.
Lectures
GET /lecture/instructorLecture/:instructorId: Get all lectures for a specific instructor.
POST /lecture/assigncourse: Add Lecture to a specific instructor.
GET /lecture/getAlllecture: Get all lectures for a all instructor in admin side.
Project Structure
.
├── frontend
│   ├── public
│   └── src
│       ├── components
│       │   ├── Course.js
│       │   ├── Lecture.js
│       │   ├── IntructorLecture.js
│       │   ├── AllInstructor.js
│       ├── App.js
│       ├── index.js
│       └── ...
├── server
│   ├── model
│   │   ├── Course.js
│   │   ├── Instructor.js
│   │   └── Lecture.js
│   ├── routes
│   │   ├── course.js
│   │   ├── instructor.js
│   │   └── lecture.js
│   ├── app.js
│   └── ...
├── .gitignore
├── README.md
└── ...
