import { REPO_ACTIONS, CHANGE_COLOR_THEME } from './../actions/types';
import { COLOR_THEME } from './../constants';

const uiState = {
  isFetching: false,
  errorMessage: '',
  colorTheme: COLOR_THEME.LIGHT
};

const uiReducer = (ui = uiState, action) => {
  switch(action.type) {
    case REPO_ACTIONS.FETCH_USER_REPOSITORIES:
      return {
        ...ui,
        errorMessage: '',
        isFetching: true
      };

    case REPO_ACTIONS.FETCH_USER_REPOSITORIES_SUCCESS:
      return {
        ...ui,
        errorMessage: '',
        isFetching: false
      };

    case REPO_ACTIONS.FETCH_USER_REPOSITORIES_ERROR:
      return {
        ...ui,
        isFetching: false,
        errorMessage: action.error.message
      }

    case CHANGE_COLOR_THEME:
      return {
        ...ui,
        colorTheme: action.colorTheme
      }

    default:
      return ui;
  }
}

export default uiReducer;