import { createMuiTheme } from '@material-ui/core/styles';
import { teal, pink } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: { main: teal[500] },
    secondary: { main: pink[700] }
  }
});
