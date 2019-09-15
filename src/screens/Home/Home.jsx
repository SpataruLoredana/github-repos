import React from 'react';
import { useStyles } from './styles';
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
          handleReposSearch={getUserRepositories}
          history={history}
          colorTheme={colorTheme}
        />
      </Container>
    </Grid>
  );
}

export default Home;