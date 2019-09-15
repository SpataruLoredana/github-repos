import { connect } from 'react-redux';
import { changeColorTheme } from '../../actions/types';

import Repos from './Repos';

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
    changeColorTheme: (colorTheme) => {
      dispatch(changeColorTheme(colorTheme));
    }
  };
};

export default connect(state2Props, dispatch2Props)(Repos);