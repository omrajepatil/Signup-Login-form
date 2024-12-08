import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={LoginSchema}
    onSubmit={onSubmit}
  >
    {() => (
      <Form className="form">
        <div>
          <label htmlFor="email">Email</label> <br />
          <Field id="email" name="email" type="email" placeholder="Enter your Email" className='input'/>
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        
        <div>
          <label htmlFor="password">Password</label> <br />
          <Field id="password" name="password" type="password" placeholder="Enter your Password" className='input'/>
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        
        <button type="submit">Login</button>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
