import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  FormControlLabel,
  Switch,
  Divider,
} from '@material-ui/core';

const NavBar = ({ colorTheme, changeColorTheme }) => {
  const classes = useStyles({ colorTheme });
  const [state, setState] = useState({
    darkTheme: false
  });

  const handleToogleChange = event => {
    const colorTheme = event.target.checked ? 'dark' : 'light';
    setState({ ...state, darkTheme: event.target.checked });
    changeColorTheme(colorTheme);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          >
            <i className='material-icons'>menu</i>
          </IconButton>
          <Link to='/' className={classes.link}>
            GitHub Repos
          </Link>
          <FormControlLabel
            control={
              <Switch
                checked={state.darkTheme}
                onChange={handleToogleChange}
                value='darkTheme'
                color='default'
              />
            }
            label='Toggle Theme'
          />
          <Divider className={classes.divider} orientation='vertical' />
          <IconButton edge='start' color='inherit' aria-label='menu' mx={2}>
            <i className='material-icons'>notifications</i>
          </IconButton>
          <IconButton edge='start' color='inherit' aria-label='menu' mx={2}>
            <i className='material-icons'>account_circle</i>
          </IconButton>
          <IconButton edge='start' color='inherit' aria-label='menu' mx={2}>
            <i className='material-icons'>help</i>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;