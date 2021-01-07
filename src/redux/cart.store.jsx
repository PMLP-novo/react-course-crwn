import {createSelector} from 'reselect'
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

function removeItemFromCart(currentItems, ItemToChange){
    if (ItemToChange.quantity>1){
        return currentItems.map(
            (item)=>({ ...item, quantity:item.quantity - (item.id === ItemToChange.id)})
            )
    }else{
        return currentItems.filter(item=>item.id!==ItemToChange.id)
    }
}

export function cartReducer(state=INITIAL_STATE, action){
    switch (action.type){
        case 'TOGGLE_CART_HIDDEN':
            return {...state,hidden:!state.hidden}
        case 'ADD_CART_ITEM':
            return {...state,
                items:addItemToCart(state.items,action.payload)}
        case "CLEAR_CART_ITEM":
            return {...state,items:state.items.filter(item=>item.id!==action.payload)}
        case "REMOVE_CART_ITEM":
                return {...state,items:removeItemFromCart(state.items,action.payload)}
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

export function clearCartItem(id){
    return {type:"CLEAR_CART_ITEM", payload:id}
}

export function removeCartItem(item){
    return {type:"REMOVE_CART_ITEM", payload:item}
}

const selectCart = state=>state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart=> cart.items
)


export const selectCartItemCount = createSelector(
    [selectCartItems],
    items=>items.reduce((accumalated, item)=>accumalated+item.quantity,0)
)

export const selectTotalPrice = createSelector(
    [selectCartItems],
    items=>items.reduce((accumalated, item)=>accumalated+(item.quantity*item.price),0))