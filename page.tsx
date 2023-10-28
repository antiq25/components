'use client';
import React, { useState } from 'react';
import { authAPI } from './client/api/apiCaller';
import { generateMessage } from './client/api/apiHelper'
import { error } from 'console';
const AuthPage: React.FC = () => {
  // States for forms
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [code, setCode] = useState('');
  const [id, setId] = useState<number | null>(null);
  const [token, setToken] = useState('');
  const [profileData, setProfileData] = useState<Partial<{ firstName: string; lastName: string, token: string, }>>({});
  const [response, setResponse] = useState('');

const handleError = (error: any) => { // added opening curly brace
  if (error.response) {
    // generateMessage function is not defined in the given code
    // assuming it accepts three arguments: type, source, message
    return generateMessage('error', 'API', error.response.data.message); // removed fourth argument
  } else if (error.request) {
    return 'No response received from server.';
  } else {
    return error.message;
  }
}; // added closing curly brace




const handleSignup = async () => {
    try {
        const data = await authAPI.signup({ email, password, firstName, lastName });
        setResponse(JSON.stringify(data));
    } catch (error) {
        setResponse(handleError(error));
    }
};

const handleLogin = async () => {
    try {
        const data = await authAPI.login({ email, password });
        setResponse(JSON.stringify(data));
    } catch (error) {
        setResponse(handleError(error));
    }
};
  // Handlers
  const handleVerifyEmail = async () => {
    try {
      const data = await authAPI.verifyEmail(code);
      setResponse(JSON.stringify(data));
    } catch (error) {
      setResponse(handleError(error));
    }
  };

const handleResendEmailVerification = async () => {
    try {
        const data = await authAPI.resendEmailVerification({ email });
        setResponse(JSON.stringify(data));
    } catch (error) {
        setResponse(handleError(error));
    }
};

  const handleGetProfile = async () => {
    try {
      const data = await authAPI.getProfile(Number(id));
      setResponse(JSON.stringify(data));
    } catch (error) {
      setResponse(handleError(error));
    }
  };

const handleUpdateProfile = async () => {
  try {
    const data = await authAPI.updateProfile(Number(id), profileData);
    setResponse(JSON.stringify(data));
  } catch (error) {
    setResponse(handleError(error));
  }
};


  const handleForgotPassword = async () => {
    try {
      await authAPI.forgotPassword(email);
      setResponse('Forgot password email sent successfully.');
    } catch (error) {
      setResponse(handleError(error));
    }
  };

  const handleResetPassword = async () => {
    try {
      const data = await authAPI.resetPassword(token, password);
      setResponse(JSON.stringify(data));
    } catch (error) {
      setResponse(handleError(error));
    }
  };

  // JSX Rendering
  return (
    <div>
      {/* Signup Form */}
      <div>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
        <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
        <button onClick={handleSignup}>Signup</button>
      </div>

      {/* Login Form */}
      <div>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>

      <div>
        <input placeholder="Verification Code" onChange={(e) => setCode(e.target.value)} />
        <button onClick={handleVerifyEmail}>Verify Email</button>
      </div>

      {/* Resend Email Verification */}
      <div>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleResendEmailVerification}>Resend Verification Email</button>
      </div>

      {/* Get Profile */}
      <div>
        <input placeholder="Profile ID" onChange={(e) => setId(Number(e.target.value))} />
        <button onClick={handleGetProfile}>Get Profile</button>
      </div>

      {/* Update Profile (assuming only first name and last name can be updated for simplicity) */}
      <div>
        <input placeholder="Profile ID" onChange={(e) => setId(Number(e.target.value))} />
        <input placeholder="First Name" onChange={(e) => setProfileData((prev) => ({ ...prev, firstName: e.target.value }))} />
        <input placeholder="Last Name" onChange={(e) => setProfileData((prev) => ({ ...prev, lastName: e.target.value }))} />
        <button onClick={handleUpdateProfile}>Update Profile</button>
      </div>

      {/* Forgot Password */}
      <div>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleForgotPassword}>Forgot Password</button>
      </div>

      {/* Reset Password */}
      <div>
        <input placeholder="Token" onChange={(e) => setToken(e.target.value)} />
        <input placeholder="New Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleResetPassword}>Reset Password</button>
      </div>

      {/* Display Response */}
      <div>
/* Display Response */
/* Display Response */
<div>
  <h2>Response:</h2>
  {handleError(response)} = {response}
</div>

      </div>
    </div>
  );
};

export default AuthPage;
