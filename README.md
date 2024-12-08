# Signup-Login Form with Password Strength Checker

This project is a simple SignUp-Login form built with React, TypeScript, and Formik for form handling and validation. The form includes password strength indication for the SignUp form and the ability to show success messages after form submission.

(a) How to Run the 

Prerequisites
   Node.js (v14 or higher) installed on your machine
   A code editor like VSCode
   
Steps to Run the Project

 1) Clone the Repository:
      git clone https://github.com/your-username/Signup-Login-form.git
      cd Signup-Login-form
 2) Install Dependencies:
      npm install
      npm
 3) Start the Development Server:
      npm run dev

This will start the development server and open the application in your default browser. The application will be running on http://localhost:3000.

(b) Design Choices Made

  1) React with TypeScript:

    The project was built using React, a popular JavaScript library for building user interfaces, with TypeScript for type       safety. TypeScript ensures that we catch potential bugs during development and improves code maintainability.
    Formik for Form Handling:

  2) Formik was used to simplify the form handling process. 
    It provides built-in handling for form state, validation, and error messages, which reduces the boilerplate code needed      to manage forms in React.

  3) Yup for Validation:
     Yup was used in combination with Formik to handle form validation. The schema validation ensures that the inputs (name,      email, and password) meet the required criteria before submission.

  4) Password Strength Checker:
      The strength of the password is evaluated dynamically as the user types. This feature is implemented by checking the         length and the inclusion of uppercase, lowercase letters, numbers, and special characters. A color indicator (green           for strong, orange for medium, and red for weak) is displayed along with the strength.
  
   5) UI/UX:
      The user interface follows a clean and simple design, focusing on usability and accessibility. There are input fields         for the name, email, and password, along with appropriate error messages when validation fails.

A success message is displayed once the user submits the form successfully, enhancing the user experience.

(c) Assumptions or Limitations
    
  No Backend Integration:
    This project does not include a backend server or a database. The form submission doesn't persist the data anywhere, and 
    there is no authentication flow. The form success is purely visual for the user. To make this a full-fledged 
    application, you would need to integrate a backend with a database for storing and verifying user information.
