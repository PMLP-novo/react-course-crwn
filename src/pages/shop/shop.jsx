import React from "react";
import './shop.scss'
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/CollectionOverview'
import CollectionPage from '../CollectionPage'


const ShopPage=({match})=>(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>)

export {ShopPage}