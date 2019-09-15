import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
  repoCard: {
    width: 350,
    margin: theme.spacing(1, 0),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardActions: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  starIcon: {
    verticalAlign: 'bottom',
    color: yellow[500]
  },
  text: {
    fontSize: 14
  }
}));