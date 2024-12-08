import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

const AuthenticationPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  const handleSignUp = (values: { name: string; email: string; password: string }) => {
    localStorage.setItem('user', JSON.stringify(values));
    alert('Sign Up Successful!');
  };

  const handleLogin = (values: { email: string; password: string }) => {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser.email === values.email && storedUser.password === values.password) {
      alert('Login Successful!');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1 className='heading'>{isSignUp ? 'Sign Up' : 'Login'}</h1>

      {isSignUp ? (
        <SignUpForm onSubmit={handleSignUp} />
      ) : (
        <LoginForm onSubmit={handleLogin} />
      )}

      <div>
        {isSignUp ? (
          <p className='switch'>
            Already have an account?{' '}
            <span className="switch" onClick={() => setIsSignUp(false)}>
              Login
            </span>
          </p>
        ) : (
          <p className='switch'>
            Don’t have an account?{' '}
            <span className="switch" onClick={() => setIsSignUp(true)}>
              Sign Up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthenticationPage;
