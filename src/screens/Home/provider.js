import { connect } from 'react-redux';
import { getUserRepositories } from '../../actions/repo-actions';
import { changeColorTheme } from '../../actions/types';

import Home from './Home';

const state2Props = (state) => {
  return {
    username: state.data.username,
    avatarUrl: state.data.userAvatar,
    repositories: state.data.repositories,
    isFetching: state.ui.isFetching,
    errorMessage: state.ui.errorMessage,
    colorTheme: state.ui.colorTheme
  };
};

const dispatch2Props = (dispatch) => {
  return {
    getUserRepositories: (username) => {
      dispatch(getUserRepositories(username));
    },
    changeColorTheme: (colorTheme) => {
      dispatch(changeColorTheme(colorTheme));
    }
  };
};

export default connect(state2Props, dispatch2Props)(Home);