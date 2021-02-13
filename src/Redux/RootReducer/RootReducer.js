import { combineReducers } from 'redux';
import currentProfileReducer from '../CurrentProfile/CurrentProfileReducer';
import profileReducer from '../Profile/ProfileReducer/ProfileReducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    currentProfile: currentProfileReducer
})

export default rootReducer;