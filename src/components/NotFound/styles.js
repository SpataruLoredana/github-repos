import { makeStyles } from '@material-ui/core/styles';
import { teal, pink } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4)
  },
  button: props => ({
    margin: '2rem auto',
    padding: theme.spacing(2, 6),
    background: props.colorTheme === 'dark' ? pink[500] : teal[400],
    color: theme.palette.primary.contrastText,
    '&:hover': {
      background: props.colorTheme === 'dark' ? pink[700] : teal[600]
    }
  }),
  text: props => ({
    textAlign: 'center',
    color: props.colorTheme === 'dark' ? theme.palette.background.paper : theme.palette.text.primary
  }),
  link: {
    color: theme.palette.background.paper,
    textDecoration: 'none'
  }
}));
