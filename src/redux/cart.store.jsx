const INITIAL_STATE = {
    hidden:true,
    items:[]
}
function addItemToCart(currentItems, newItem){
    if (currentItems.find(item=>item.id === newItem.id)){
        return currentItems.map(
            (item)=>({ ...item, quantity:item.quantity + (item.id === newItem.id)})
            )
    }else{
        return [...currentItems,{...newItem,quantity:1}]
    }
}

export function cartReducer(state=INITIAL_STATE, action){
    switch (action.type){
        case 'TOGGLE_CART_HIDDEN':
            return {...state,hidden:!state.hidden}
        case 'ADD_CART_ITEM':
            return {...state,
                items:addItemToCart(state.items,action.payload)}
        default:
            return state
    }

}

export function toggleCartHidden(){
    return {type:"TOGGLE_CART_HIDDEN"}
}

export function addCartItem(item){
    return {type:"ADD_CART_ITEM",payload:item}
}
