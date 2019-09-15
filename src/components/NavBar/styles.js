import { makeStyles } from '@material-ui/core/styles';
import { teal, grey } from '@material-ui/core/colors';
import { COLOR_THEME } from './../../constants';

export const useStyles = makeStyles(theme => ({
  appBar: props => ({
    background: props.colorTheme === COLOR_THEME.DARK ? grey[900] : teal[400]
  }),
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