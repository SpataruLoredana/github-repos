import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';
import { COLOR_THEME } from './../../constants';
import {
  Paper,
  InputBase,
  Button
} from '@material-ui/core';

const SearchBar = ({ handleReposSearch, colorTheme }) => {
  const classes = useStyles({ colorTheme });
  const [username, setUsername] = useState('');

  return (
    <Paper className={classes.searchBar}>
      <i className={`material-icons ${classes.searchIcon}`}>search</i>
      <form className={classes.form} onSubmit={(e) => handleReposSearch(e, username)}>
        <InputBase
          className={classes.textInput}
          placeholder='Username'
          inputProps={{ 'aria-label': 'search github' }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          type='submit'
          variant='contained'
          className={classes.searchButton}
          color={colorTheme === COLOR_THEME.DARK ? 'secondary' : 'primary'}
        >
          Search
      </Button>
      </form>
    </Paper>
  );
}

SearchBar.propTypes = {
  handleReposSearch: PropTypes.func,
  colorTheme: PropTypes.oneOf([COLOR_THEME.DARK, COLOR_THEME.LIGHT]),
};

export default SearchBar;

