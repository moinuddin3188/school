import { SET_PROFILE } from "../ProfileType/ProfileType"

export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        payload: profile
    }
}