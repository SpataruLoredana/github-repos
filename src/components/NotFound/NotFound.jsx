import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import {
  Container,
  Button,
  Typography
} from '@material-ui/core';

const NotFound = ({ colorTheme }) => {
  const classes = useStyles({ colorTheme });
  return (
    <>
      <Container maxWidth='md' className={classes.container}>
        <Typography variant='h2' className={classes.text}>
          There is nothing here.
        </Typography>
        <Button variant='contained' className={classes.button} >
          <Link to='/' className={classes.link} >Go To Home Page</Link>
        </Button>
      </Container>
    </>
  );
}

export default NotFound;