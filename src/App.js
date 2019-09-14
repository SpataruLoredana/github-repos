import React from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';

function App() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md" >
        <Typography variant='h1' style={{ textAlign: 'center' }} gutterBottom>
          GitHub Repos
        </Typography>
      </Container>
    </div>
  );
}

export default App;
