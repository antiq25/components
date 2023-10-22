import React, { useState } from 'react';
import {
  signUp,
  login,
  handleFetchProfile,
  handleUpdateProfile,
  handleVerifyEmail,
  handleForgotPassword,
  handleResetPassword
} from '../../../material-ui-nextjs-ts/src/authenticate/ApiCalls';  // Replace with your actual import

const ApiTester: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [token, setToken] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [response, setResponse] = useState<any>(null);

  const executeApiCall = async (apiCall: Promise<any>) => {
    const res = await apiCall;
    setResponse(res);
    if (res.success && res.data.token) {
      setToken(res.data.token);
    }
  };

  return (
    <div>
      <h1>API Tester</h1>

      <div>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <input type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
        <button onClick={() => executeApiCall(signUp({ email, password, firstName, lastName }))}>Sign Up</button>
      </div>

      <div>
        <h2>Log In</h2>
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={() => executeApiCall(login({ email, password }))}>Log In</button>
      </div>

      <div>
        <h2>Fetch Profile</h2>
        <button onClick={() => executeApiCall(handleFetchProfile(token as string))}>Fetch Profile</button>
      </div>

      <div>
        <h2>Update Profile</h2>
        <input type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
        <button onClick={() => executeApiCall(handleUpdateProfile(token as string, firstName, lastName))}>Update Profile</button>
      </div>

      <div>
        <h2>Verify Email</h2>
        <input type="text" placeholder="Verification Code" onChange={e => setVerificationCode(e.target.value)} />
        <button onClick={() => executeApiCall(handleVerifyEmail(token as string, verificationCode))}>Verify Email</button>
      </div>

      <div>
        <h2>Forgot Password</h2>
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <button onClick={() => executeApiCall(handleForgotPassword(email))}>Forgot Password</button>
      </div>

      <div>
        <h2>Reset Password</h2>
        <input type="text" placeholder="Token" onChange={e => setToken(e.target.value)} />
        <input type="password" placeholder="New Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={() => executeApiCall(handleResetPassword(token as string, password))}>Reset Password</button>
      </div>

      <div>
        <h2>API Response</h2>
        <pre>{JSON.stringify(response, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ApiTester;
