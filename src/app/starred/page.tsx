'use client';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

class StarredPage extends React.Component {
  render() {
    return (
      <iframe 
        src="https://muf.eclectiq.cc/new.html" 
        style={{height: '100vh', width: '100%'}}
        title="External Site"
      />
    );
  }
}

export default StarredPage;
