import {createSelector} from 'reselect'
import {COLLECTIONS,SECTIONS} from '../assests/shop-data'

const INITIAL_STATE = {
    collections:COLLECTIONS,
    sections:SECTIONS
}

export function shopReducer(state=INITIAL_STATE, action){
    switch (action.type){
        default:
            return state
    }

}


const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsList = createSelector(
    [selectCollections],
    collections => Object.values(collections)
)
export const selectSections = createSelector(
    [selectShop],
    shop => shop.sections
)

export const selectCollection = routeName => createSelector(
    [selectCollections],
    collections => collections[routeName]
)
