import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';

import Home from './screens/Home/provider';
import Repos from './screens/Repos/provider';

const App = () => (
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Route exact path='/' component={Home} />
      <Route path='/repos/:username' component={Repos} />
    </ThemeProvider>
  </HashRouter>
);

export default App;
