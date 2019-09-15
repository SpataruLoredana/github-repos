import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';
import { COLOR_THEME } from './../../constants';
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Typography
} from '@material-ui/core';

import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = ({
  getUserRepositories,
  changeColorTheme,
  colorTheme,
  history
}) => {
  const classes = useStyles({ colorTheme });
  const [inputError, setinputError] = useState('');

  const handleSearchRepos = (e, username) => {
    e.preventDefault();
    if (!username) {
      setinputError('Please type a username and then hit search');
      return;
    }
    getUserRepositories(username);
    history.push(`/repos/${username}`);
  }

  return (
    <Grid className={classes.grid}>
      <NavBar changeColorTheme={changeColorTheme} colorTheme={colorTheme} />
      <CssBaseline />
      <Box py={6}>
        <Typography variant='h1' className={classes.text}>
          GitHub Repos
        </Typography>
      </Box>
      <Container maxWidth='sm'>
        <Typography variant='subtitle1' className={classes.text}>
          Type a GitHub username and we'll show you a
          list of repositories this user owns or contribute to with the most stars.
        </Typography>
        <SearchBar
          handleReposSearch={handleSearchRepos}
          colorTheme={colorTheme}
        />
        {
          inputError &&
          <Typography variant='subtitle2' className={classes.error}>
            {inputError}
          </Typography>
        }
      </Container>
    </Grid>
  );
}

Home.propTypes = {
  getUserRepositories: PropTypes.func,
  changeColorTheme: PropTypes.func,
  colorTheme: PropTypes.oneOf([COLOR_THEME.DARK, COLOR_THEME.LIGHT]),
  history: PropTypes.shape()
};

export default Home;