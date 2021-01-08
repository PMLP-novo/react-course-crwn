import React from 'react';
import './CollectionOverview.scss'
import {connect} from 'react-redux'
import CollectionPreview from '../CollectionPreview'
import {createStructuredSelector} from "reselect"
import {selectCollectionsList} from '../../redux/shop.store'


const CollectionOverview = ({collections})=>(
  <div className='collection-overview'> 
  {collections.map(
      ({id, ...otherProps}) => 
  <CollectionPreview key={id} {...otherProps}/>)}
  </div>
)

const mapStateToProps = createStructuredSelector({collections:selectCollectionsList})
export default connect(mapStateToProps)(CollectionOverview);
