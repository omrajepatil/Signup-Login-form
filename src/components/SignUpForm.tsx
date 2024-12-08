import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

interface SignUpFormProps {
  onSubmit: (values: { name: string; email: string; password: string }) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => (
  <Formik
    initialValues={{ name: '', email: '', password: '' }}
    validationSchema={SignUpSchema}
    onSubmit={onSubmit}
  >
    {() => (
      <Form className="form">
        <div>
          <label htmlFor="name">Name</label> <br />
          <Field id="name" name="name" placeholder="Enter your Name" className='input'/>
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        
        <div>
          <label htmlFor="email">Email</label> <br />
          <Field id="email" name="email" type="email" placeholder="Enter your email" className='input' />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        
        <div>
          <label htmlFor="password">Password</label> <br />
          <Field id="password" name="password" type="password" placeholder="Enter your Password" className='input'/>
          <ErrorMessage name="password" component="div" className="error" />
          {/* <p>Password length should min 8</p> */}
        </div>
        
        <button type="submit">Sign Up</button>
      </Form>
    )}
  </Formik>
);

export default SignUpForm;
