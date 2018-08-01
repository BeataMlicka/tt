import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import googleAuth from './user/google_auth_reducer';
import localSignIn from './user/local_auth_reducer';
import user from './user/user_reducer';
import initialData from './initial_data_reducer';
import matchState from './match_state_reducer';
import nextShots from './next_shots_reducer';
import tablePlaces from './table_places_reducer';
import appState from './app_state_reducer';

export default combineReducers({
    googleAuth,
    localSignIn,
    user,
    initialData,
    matchState,
    nextShots,
    tablePlaces,
    appState,
    form: formReducer
});