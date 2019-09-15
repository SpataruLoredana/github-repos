import { makeStyles } from '@material-ui/core/styles';
import { teal, pink, red } from '@material-ui/core/colors';

const darkGradient = 'linear-gradient(to right, #000000, #434343)';
const lightGradient = 'linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)';

export const useStyles = makeStyles(theme => ({
  repos: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(1)
  },
  grid: props => ({
    background: props.colorTheme === 'dark' ? darkGradient : lightGradient,
    minHeight: '100vh'
  }),
  text: props => ({
    textAlign: 'center',
    color: props.colorTheme === 'dark' ? theme.palette.background.paper : theme.palette.text.primary
  }),
  progressContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 20,
  },
  progress: props => ({
    color:  props.colorTheme === 'dark' ? pink[700] : teal[700]
  }),
  button: props => ({
    margin: '2rem auto',
    padding: theme.spacing(1, 3),
    background: props.colorTheme === 'dark' ? pink[500] : teal[400],
    color: theme.palette.primary.contrastText,
    '&:hover': {
      background: props.colorTheme === 'dark' ? pink[700] : teal[600]
    }
  }),
  error: {
    color: red[500],
    textAlign: 'center'
  },
  link: {
    color: theme.palette.background.paper,
    textDecoration: 'none'
  }
}));