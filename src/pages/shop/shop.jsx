import React from "react";
import './shop.scss'
import SHOP_DATA from '../../assests/shop-data'
import CollectionPreview from '../../components/CollectionPreview'

class ShopPage extends React.Component{
    constructor(){
        super()
        this.state = {collections:SHOP_DATA.SHOP_DATA}
    }
    render(){
        return (
            <div className='shop-page'> 
            {this.state.collections.map(
                ({id, ...otherProps}) => 
            <CollectionPreview key={id} {...otherProps}/>)}
            </div>)

}
}

export {ShopPage}