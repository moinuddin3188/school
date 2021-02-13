import { CURRENT_PROFILE } from './CurrentProfileType';

export const currentProfile = profile => {
    return {
        type: CURRENT_PROFILE,
        payload: profile
    }
}