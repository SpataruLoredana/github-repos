import { makeStyles } from '@material-ui/core/styles';

const darkGradient = 'linear-gradient(to right, #000000, #434343)';
const lightGradient = 'linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)';

export const useStyles = makeStyles(theme => ({
  grid: props => ({
    background: props.colorTheme === 'dark' ?  darkGradient : lightGradient,
    minHeight: '100vh'
  }),
  text: props => ({
    textAlign: 'center',
    color: props.colorTheme === 'dark' ? 
      theme.palette.background.paper : theme.palette.text.primary
  })
}));