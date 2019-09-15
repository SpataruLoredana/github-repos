import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { COLOR_THEME } from './../../constants';
import {
  Avatar,
  Box,
  Container,
  CircularProgress,
  CssBaseline,
  Grid,
  Typography,
  Button
} from '@material-ui/core';

import NavBar from './../../components/NavBar';
import RepoCard from './../../components/RepoCard';

const Repos = ({
  changeColorTheme,
  colorTheme,
  avatarUrl,
  username,
  repositories,
  isFetching,
  errorMessage
}) => {
  const classes = useStyles({ colorTheme });
  return (
    <Grid className={classes.grid}>
      <NavBar changeColorTheme={changeColorTheme} colorTheme={colorTheme} />
      <CssBaseline />
      <Box py={2} className={classes.box}>
        {
          isFetching && (
            <div className={classes.progressContainer}>
              <CircularProgress className={classes.progress} />
            </div>
          )
        }
        {
          avatarUrl &&
          <Avatar alt={username} src={avatarUrl} className={classes.avatar} />
        }
        {
          username && (
            <Typography variant='h5' className={classes.text}>
              {username} repositories
          </Typography>
          )
        }
      </Box>
      {
        errorMessage && (
          <Typography variant='h5' className={classes.error}>
            {errorMessage}
          </Typography>
        )
      }
      {
        !repositories.length && !isFetching && !errorMessage && (
          <Typography variant='h2' className={classes.text}>
            There is nothing here.
          </Typography>
        )
      }
      <Box className={classes.box}>
        <Button variant='contained' className={classes.button} >
          <Link to='/' className={classes.link} >Search Again ?</Link>
        </Button>
      </Box>
      <Container maxWidth='lg' className={classes.repos}>
        {repositories.map(repo =>
          <RepoCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            link={repo.html_url}
            stars={repo.stargazers_count}
            isOwner={username === repo.owner.login.toLowerCase()}
          />)}
      </Container>
    </Grid>
  );
}

Repos.propTypes = {
  changeColorTheme: PropTypes.func,
  colorTheme: PropTypes.oneOf([COLOR_THEME.DARK, COLOR_THEME.LIGHT]),
  avatarUrl: PropTypes.string,
  username: PropTypes.string,
  repositories: PropTypes.arrayOf(PropTypes.shape()),
  isFetching: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default Repos;
