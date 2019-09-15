import axios from 'axios';
import {
  fetchUserRepositories,
  fetchUserRepositoriesSuccess,
  fetchUserRepositoriesError
} from './types';

export const getUserRepositories = (username) => {
  return (dispatch) => {
    dispatch(fetchUserRepositories(username));
    axios.get(`https://api.github.com/usersv/${username}/repos?type=all`)
      .then(response => dispatch(fetchUserRepositoriesSuccess(response.data)))
      .catch(error => dispatch(fetchUserRepositoriesError(error)))
  };
};
