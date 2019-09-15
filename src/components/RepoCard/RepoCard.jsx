import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography
} from '@material-ui/core';
import { useStyles } from './styles';

const RepoCard = ({
  name,
  description,
  link,
  stars,
  isOwner
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.repoCard}>
      <CardContent>
        <Typography variant='h5' component='h2' gutterBottom>
          {name}
        </Typography>
        <Typography variant='subtitle2' component='span' mr={1}>
          {isOwner ? 'Owner' : 'Member'}
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary' mt={1}>
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button href={link} size='small' variant='outlined'>View Repository</Button>
        <Box component='span'>
          <i className={`material-icons ${classes.starIcon}`}>star</i>
          <Typography component='span' className={classes.text}>
            {stars}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}

export default RepoCard;