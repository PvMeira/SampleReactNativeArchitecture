import {createActions, createReducer} from 'reduxsauce';

const INITIAL_STATE = {name: '', profile: []};

/**
 * Action types & creators
 */
export const {Types, Creators} = createActions({
  logoutUser: [],
  loginUser: ['user'],
  userProfile: ['profile'],
});



const logout = (state = INITIAL_STATE, action) => {
  return (state = INITIAL_STATE);
};

const profile = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    profile: [...action.profile],
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_USER]: login,
  [Types.LOGOUT_USER]: logout,
  [Types.USER_PROFILE]: profile,
});
