import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
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
import NotFound from './../../components/NotFound';

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
      <Box pt={6} className={classes.box}>
        {avatarUrl &&
          <Avatar alt={username} src={avatarUrl} className={classes.avatar} />
        }
        {username && (
          <Typography variant='h5' className={classes.text}>
            {username} repositories
            </Typography>
        )
        }
      </Box>
      {
        (!!repositories.length || errorMessage) && (
          <Box className={classes.box}>
            <Button href='/' variant='contained' className={classes.button} >
              <Link to='/' className={classes.link} >Search Again ?</Link>
            </Button>
          </Box>
        )
      }
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
        {isFetching &&
          <div className={classes.progressContainer}>
            <CircularProgress className={classes.progress} />
          </div>
        }
        {
          !repositories.length && !isFetching && !errorMessage &&
          <NotFound colorTheme={colorTheme} />
        }
      </Container>
      {
        errorMessage &&
        <Typography variant='h5' className={classes.error}>
          {errorMessage}
        </Typography>
      }
    </Grid>
  );
}

export default Repos;