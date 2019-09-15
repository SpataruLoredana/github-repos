import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  link: {
    fontSize: '1.1rem',
    color: theme.palette.background.paper,
    textDecoration: 'none',
    flexGrow: 1
  },
  divider: {
    height: 28,
    margin: theme.spacing(0, 2),
    background: theme.palette.background.paper
  }
}));