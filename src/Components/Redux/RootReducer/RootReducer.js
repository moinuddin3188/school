import { combineReducers } from 'redux';
import profileReducer from '../Profile/ProfileReducer/ProfileReducer';

const rootReducer = combineReducers({
    profile: profileReducer
})

export default rootReducer;