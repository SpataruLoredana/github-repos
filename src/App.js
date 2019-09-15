import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './screens/Home/provider';
import Repos from './screens/Repos/provider';

const App = () => (
  <HashRouter>
    <Route exact path='/' component={Home} />
    <Route path='/repos/:username' component={Repos} />
  </HashRouter>
);

export default App;
