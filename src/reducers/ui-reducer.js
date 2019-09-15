import { REPO_ACTIONS, CHANGE_COLOR_THEME } from './../actions/types';

const uiState = {
  isFetching: false,
  errorMessage: '',
  colorTheme: 'light'
};

const uiReducer = (ui = uiState, action) => {
  switch(action.type) {
    case REPO_ACTIONS.FETCH_USER_REPOSITORIES:
      return {
        ...ui,
        isFetching: true
      };

    case REPO_ACTIONS.FETCH_USER_REPOSITORIES_SUCCESS:
      return {
        ...ui,
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