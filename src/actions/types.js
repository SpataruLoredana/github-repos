export const REPO_ACTIONS = {
  FETCH_USER_REPOSITORIES: 'fetchUserRepositories',
  FETCH_USER_REPOSITORIES_SUCCESS: 'fetchUserRepositoriesSuccess',
  FETCH_USER_REPOSITORIES_ERROR: 'fetchUserRepositoriesError'
};

export const CHANGE_COLOR_THEME = 'changeColorTheme';

export const fetchUserRepositories = (username) => {
  return {
    type: REPO_ACTIONS.FETCH_USER_REPOSITORIES,
    username
  };
};

export const fetchUserRepositoriesSuccess = (repositories) => {
  return {
    type: REPO_ACTIONS.FETCH_USER_REPOSITORIES_SUCCESS,
    repositories
  };
};

export const fetchUserRepositoriesError = (error) => {
  return {
    type: REPO_ACTIONS.FETCH_USER_REPOSITORIES_ERROR,
    error
  };
};

export const changeColorTheme = (colorTheme) => {
  return {
    type: CHANGE_COLOR_THEME,
    colorTheme
  };
};