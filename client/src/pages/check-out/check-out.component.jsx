import React from 'react';
import './checkout.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


const CheckOutPage = ({cartitems, total})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartitems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <div className="total">Total: $ {total}</div>
        <StripeCheckoutButton price={total} />
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartitems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(CheckOutPage);