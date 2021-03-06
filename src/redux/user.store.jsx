import {createSelector} from 'reselect'

const INITIAL_STATE = {
    currentUser:null
}
export function userReducer(state=INITIAL_STATE, action){
    switch (action.type){
        case 'SET_CURRENT_USER':
            return {...state,currentUser:action.payload}
        default:
            return state
    }

}

export function setCurrentUser(user){
    return {type:"SET_CURRENT_USER",payload:user}
}

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)