import React from 'react';
import './CollectionPage.scss'
import {selectCollection} from '../../redux/shop.store'
import {connect} from 'react-redux'
import CollectionItem from '../../components/CollectionItem'

const CollectionPage = ({collection}) => {
  return (
  <div className="collection-page">
    <h2 className='title'>Random {collection.title}</h2>
    <div className='items'>
      {
        collection.items.map(item=><CollectionItem key={item.id} item={item}/>)
      }
    </div>
  </div>
)};
const mapStateToProps  =(state, ownProps) =>(
  {collection:selectCollection(ownProps.match.params.collectionId)(state)}
)
export default connect(mapStateToProps)(CollectionPage);
