const INITIAL_STATE = {
    hidden:true
}
export function cartReducer(state=INITIAL_STATE, action){
    switch (action.type){
        case 'TOGGLE_CART_HIDDEN':
            return {...state,hidden:!state.hidden}
        default:
            return state
    }

}

export function toggleCartHidden(){
    return {type:"TOGGLE_CART_HIDDEN"}
}
