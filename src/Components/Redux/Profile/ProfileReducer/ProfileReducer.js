const { SET_PROFILE } = require("../ProfileType/ProfileType")

const initialState = {
    profile: 'education'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                profile: action.payload
            }

        default: return state;
    }
}

export default profileReducer;