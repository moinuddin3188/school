import { CURRENT_PROFILE } from './CurrentProfileType';

const initialState = {
    profile: {}
}

const currentProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_PROFILE:
            return {
                profile: action.payload
            }

        default: return state
    }
}

export default currentProfileReducer;