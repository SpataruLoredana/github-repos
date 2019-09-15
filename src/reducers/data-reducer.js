import { REPO_ACTIONS } from './../actions/types';

const appData = {
  username: '',
  userAvatar: '',
  repositories: []
};

const dataReducer = (data = appData, action) => {
  switch (action.type) {
    case REPO_ACTIONS.FETCH_USER_REPOSITORIES:
      return {
        ...data,
        username: action.username.toLowerCase()
      };

    case REPO_ACTIONS.FETCH_USER_REPOSITORIES_SUCCESS:
      let userAvatar = '';
      const ownedRepo = action.repositories.length &&
        action.repositories.find(repo => repo.owner.login.toLowerCase() === data.username);
      if (ownedRepo) {
        userAvatar = ownedRepo.owner.avatar_url;
      }
      return {
        ...data,
        repositories: action.repositories
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .filter((repo, index) => index < 10),
        userAvatar
      };

    default:
      return data;
  }
}

export default dataReducer;