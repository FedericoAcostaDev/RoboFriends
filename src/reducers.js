import { CHANGE_SEACH_FIELD } from "./constant"

const initialState = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEACH_FIELD:
        return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;

    }
}