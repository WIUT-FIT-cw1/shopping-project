import React from 'react';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';

import './collection-item.styles.scss';
import CustomButton from '../customButton/customButton.component';

const CollectionItem = ({item, addItem}) =>{
    const {imageUrl, name, price} = item;
    return(
    <div className="collection-item">
        <div className="image" style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton className="custom-button" inverted onClick={()=>addItem(item)}>Add to Card</CustomButton>
    </div>
)}

const mapDispatchToPros = (dispatch)=>({
    addItem: (item)=>dispatch(addItem(item))
})

export default connect(null, mapDispatchToPros)(CollectionItem);