import React from 'react';
import './directory.scss';
//import deafultSections from './directory.data.jsx';
import MenuItem from '../menu-item/menu-item.jsx'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectSections} from '../../redux/shop.store'


const Directory = ({sections})=>(
  <div className='directory-menu'>
  {sections.map(({id, ...sectionProps})=> <MenuItem key={id} {...sectionProps}/>)}
  </div>
)

const mapStateToProps = createStructuredSelector({sections:selectSections})
export default connect(mapStateToProps)(Directory);
