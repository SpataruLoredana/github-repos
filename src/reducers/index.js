import { combineReducers } from 'redux';
import ui from './ui-reducer';
import data from './data-reducer';

const rootReducer = combineReducers({
  ui,
  data
});

export default rootReducer;