import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { COLOR_THEME } from './../../constants';

const darkGradient = 'linear-gradient(to right, #000000, #434343)';
const lightGradient = 'linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)';

export const useStyles = makeStyles(theme => ({
  grid: props => ({
    background: props.colorTheme === COLOR_THEME.DARK ?  darkGradient : lightGradient,
    minHeight: '100vh'
  }),
  text: props => ({
    textAlign: 'center',
    color: props.colorTheme === COLOR_THEME.DARK ? 
      theme.palette.background.paper : theme.palette.text.primary
  }),
  error: {
    color: red[500],
    paddingTop: theme.spacing(1)
  }
}));