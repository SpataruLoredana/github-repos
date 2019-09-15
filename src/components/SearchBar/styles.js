import { makeStyles } from '@material-ui/core/styles';
import { teal, pink } from '@material-ui/core/colors';
import { COLOR_THEME } from './../../constants';

export const useStyles = makeStyles(theme => ({
  searchBar: {
    padding: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(2),
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  searchIcon: {
    margin: theme.spacing(0, 1),
    color: theme.palette.text.secondary
  },
  textInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  button: props => ({
    padding: theme.spacing(1.5, 5),
    background: props.colorTheme === COLOR_THEME.DARK ? pink[500] : teal[500],
    color: theme.palette.primary.contrastText,
    '&:hover': {
      background: props.colorTheme === COLOR_THEME ? pink[700] : teal[700]
    }
  })
}));
