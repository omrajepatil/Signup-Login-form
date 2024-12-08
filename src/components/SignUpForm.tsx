import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Password strength checker function
const checkPasswordStrength = (password: string) => {
  const length = password.length;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (length > 8 && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
    return 'Strong';
  } else if (length > 6 && (hasUpperCase || hasLowerCase) && (hasNumbers || hasSpecialChars)) {
    return 'Medium';
  } else {
    return 'Weak';
  }
};

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

interface SignUpFormProps {
  onSubmit: (values: { name: string; email: string; password: string }) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  // Handle password change for strength calculation
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
    const newPassword = event.target.value;
    setPassword(newPassword); // Update local password state
    setPasswordStrength(checkPasswordStrength(newPassword)); // Update password strength
    setFieldValue('password', newPassword); // Update Formik password field
  };

  // Password strength color logic
  let strengthColor = 'red';
  if (passwordStrength === 'Medium') {
    strengthColor = 'orange';
  } else if (passwordStrength === 'Strong') {
    strengthColor = 'green';
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={SignUpSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className="form">
          <div>
            <label htmlFor="name">Name</label> <br />
            <Field id="name" name="name" placeholder="Enter your Name" className="input" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          
          <div>
            <label htmlFor="email">Email</label> <br />
            <Field id="email" name="email" type="email" placeholder="Enter your email" className="input" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          
          <div>
            <label htmlFor="password">Password</label> <br />
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Enter your Password"
              className="input"
              value={values.password} // Ensure value is managed by Formik
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePasswordChange(e, setFieldValue) // Update both local state and Formik field value
              }
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          {/* Show password strength only after entering a password */}
          {password && (
            <div style={{ color: strengthColor, marginTop: '2px',marginBottom:'4px' }}>
              Password Strength: {passwordStrength}
            </div>
          )}

          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
