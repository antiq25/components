'use client';
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Container, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, List, ListItem, ListItemButton, ListItemText, FormGroup, Tooltip, CardHeader, Avatar, IconButton } from '@mui/material';

import {
  signUp,
  login,
  handleFetchProfile,
  handleUpdateProfile,
  handleVerifyEmail,
  handleForgotPassword,
  handleResetPassword,
  generateMessage,
} from '../authenticate/ApiCalls';
import { Title } from '@mui/icons-material';

interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const apiCalls = ['Sign Up', 'Log In', 'Fetch Profile', 'Update Profile', 'Verify Email', 'Forgot Password', 'Reset Password'];

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={() => onClose('')} open={open}>
      <DialogTitle>Select API Call</DialogTitle>
      <List>
        {apiCalls.map((apiCall) => (
          <ListItem key={apiCall}>
            <ListItemButton onClick={() => handleListItemClick(apiCall)}>
              <ListItemText primary={apiCall} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function HomePage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [token, setToken] = useState<string | null>(null);
  const [selectedApiCall, setSelectedApiCall] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<string | null>(null);
  const [apiDialogOpen, setApiDialogOpen] = useState<boolean>(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState<boolean>(false);

  const executeApiCall = async (apiCall: Promise<any>) => {
    const res = await apiCall;
    const message = generateMessage(res.success ? 'success' : 'error', selectedApiCall, res.error || 'Success');
    setAlert(message);
  };


  const handleClose = (value: string) => {
    setSelectedApiCall(value);
    setApiDialogOpen(false);
  };

  useEffect(() => {
    if (alert) {
      setAlertDialogOpen(true);
    }
  }, [alert]);

  return (

    <Box>
      <Container component="main">
        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
         API CALLER
        </Typography>

<CardHeader
  avatar={
    <Avatar aria-label="">
      
    </Avatar>
  }
  action={
    <IconButton aria-label="">
      
    </IconButton>
  }

  title="Smart API Caller"
  subheader="Please select an API call to test"
/>
          <Button variant="contained" size="small" color="primary" onClick={() => setApiDialogOpen(true)}>
          Select API Call
        </Button>

        <SimpleDialog open={apiDialogOpen} onClose={handleClose} />

  

  

        {selectedApiCall === 'Sign Up' && (
          <FormGroup sx={{ marginBottom: '20px' }}>
            <Typography variant="h5">Sign Up</Typography>
            <TextField type="text" label="Email" onChange={(e) => setEmail(e.target.value)} />
            <TextField type="password" label="Password" onChange={(e) => setPassword(e.target.value)} />
            <TextField type="text" label="First Name" onChange={(e) => setFirstName(e.target.value)} />
            <TextField type="text" label="Last Name" onChange={(e) => setLastName(e.target.value)} />
            <Button variant="contained" color="primary" onClick={() => executeApiCall(signUp({ email, password, firstName, lastName }))}>
              Sign Up
            </Button>
          </FormGroup>
        )}

        {selectedApiCall === 'Log In' && (
          <FormGroup sx={{ marginBottom: '20px' }}>
            <Typography variant="h5">Log In</Typography>
            <TextField type="text" label="Email" onChange={(e) => setEmail(e.target.value)} />
            <TextField type="password" label="Password" onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" color="primary" onClick={() => executeApiCall(login({ email, password }))}>
              Log In
            </Button>
          </FormGroup>
        )}

        {selectedApiCall === 'Fetch Profile' && (
          <FormGroup sx={{ marginBottom: '20px' }}>
            <Typography variant="h5">Fetch Profile</Typography>
            <Button variant="contained" color="primary" onClick={() => executeApiCall(handleFetchProfile(token as string))}>
              Fetch Profile
            </Button>
          </FormGroup>
        )}

        {selectedApiCall === 'Update Profile' && (
          <FormGroup sx={{ marginBottom: '20px' }}>
            <Typography variant="h5">Update Profile</Typography>
            <TextField type="text" label="First Name" onChange={(e) => setFirstName(e.target.value)} />
            <TextField type="text" label="Last Name" onChange={(e) => setLastName(e.target.value)} />
            <Button variant="contained" color="primary" onClick={() => executeApiCall(handleUpdateProfile(token as string, firstName, lastName))}>
              Update Profile
            </Button>
          </FormGroup>
        )}

        {selectedApiCall === 'Verify Email' && (
          <FormGroup sx={{ marginBottom: '20px' }}>
            <Typography variant="h5">Verify Email</Typography>
            <TextField type="text" label="Verification Code" onChange={(e) => setVerificationCode(e.target.value)} />
            <Button variant="contained" color="primary" onClick={() => executeApiCall(handleVerifyEmail(token as string, verificationCode))}>
              Verify Email
            </Button>
          </FormGroup>
        )}

        {selectedApiCall === 'Forgot Password' && (
          <FormGroup sx={{ marginBottom: '20px' }}>
            <Typography variant="h5">Forgot Password</Typography>
            <TextField type="text" label="Email" onChange={(e) => setEmail(e.target.value)} />
            <Button variant="contained" color="primary" onClick={() => executeApiCall(handleForgotPassword(email))}>
              Forgot Password
            </Button>
          </FormGroup>
        )}

        {selectedApiCall === 'Reset Password' && (
          <FormGroup sx={{ marginBottom: '20px' }}>
            <Typography variant="h5">Reset Password</Typography>
            <TextField type="text" label="Token" onChange={(e) => setToken(e.target.value)} />
            <TextField type="password" label="New Password" onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" color="primary" onClick={() => executeApiCall(handleResetPassword(token as string, password))}>
              Reset Password
            </Button>
          </FormGroup>
        )}
        {typeof alert === 'string' && (
          <Dialog open={!!alert}>
            <DialogTitle>{alert.includes('Success') ? 'Success' : 'Error'}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {alert}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setAlert(null)}>Close</Button>
            </DialogActions>
          </Dialog>
        )}
      </Container>
    </Box>
  )
}