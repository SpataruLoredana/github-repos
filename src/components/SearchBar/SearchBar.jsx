import React, { useState } from 'react';
import { useStyles } from './styles';
import {
  Paper,
  InputBase,
  Button,
  Typography,
  Box
} from '@material-ui/core';

const SearchBar = ({ handleReposSearch, history, colorTheme }) => {
  const classes = useStyles({ colorTheme });
  const [username, setUsername] = useState('');
  const [inputError, setinputError] = useState('');

  return (
    <>
      <Paper className={classes.searchBar}>
        <i className={`material-icons ${classes.searchIcon}`}>search</i>
        <form className={classes.form} onSubmit={(e) => {
          e.preventDefault();
          if (!username) {
            setinputError('Please type a username and then hit search');
            return;
          }
          handleReposSearch(username);
          if (history) {
            history.push(`/repos/${username}`);
          }
        }}>
          <InputBase
            className={classes.textInput}
            placeholder='Username'
            inputProps={{ 'aria-label': 'search github' }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button type='submit' variant='contained' className={classes.button} >
            Search
      </Button>
        </form>
      </Paper>
      {
        inputError && (
          <Box py={1}>
            <Typography variant='p' className={classes.error}>
              {inputError}
            </Typography>
          </Box>
        )
      }
    </>
  );
}

export default SearchBar;

