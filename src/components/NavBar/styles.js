import { makeStyles } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
  appBar: props => ({
    background: props.colorTheme === 'dark' ? grey[900] : teal[700]
  }),
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },
  divider: {
    height: 28,
    margin: theme.spacing(0, 2),
    background: theme.palette.background.paper
  }
}));